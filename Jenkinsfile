pipeline {
    agent any

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                        sh 'npx playwright install --with-deps chromium'
                        sh 'rm -rf allure-results allure-report'
                    } else {
                        bat 'npm ci'
                        bat 'npx playwright install chromium'
                        bat 'if exist allure-results rmdir /s /q allure-results & if exist allure-report rmdir /s /q allure-report'
                    }
                }
            }
        }

        stage('Run smoke tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm run smokeTest'
                    } else {
                        bat 'npm run smokeTest'
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                int reportStatus
                if (isUnix()) {
                    reportStatus = sh(
                        script: 'npx allure generate ./allure-results --clean -o ./allure-report',
                        returnStatus: true
                    )
                } else {
                    reportStatus = bat(
                        script: 'npx allure generate ./allure-results --clean -o ./allure-report',
                        returnStatus: true
                    )
                }

                if (reportStatus != 0) {
                    echo 'Allure report generation failed; check whether the smoke test stage produced allure-results.'
                }
            }
            archiveArtifacts artifacts: 'allure-report/**,allure-results/**,playwright-report/**,test-results/**', allowEmptyArchive: true
            script {
                try {
                    emailext(
                        to: 'qamitra0101@gmail.com',
                        subject: "Allure report: ${env.JOB_NAME} #${env.BUILD_NUMBER} (${currentBuild.currentResult})",
                        body: "The Allure report is attached. Jenkins build: ${env.BUILD_URL}",
                        attachmentsPattern: 'allure-report/**'
                    )
                } catch (emailError) {
                    echo "Could not send the Allure report email: ${emailError.message}"
                }
            }
        }
    }
}