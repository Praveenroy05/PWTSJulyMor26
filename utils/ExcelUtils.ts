import xlsx from 'xlsx'

export class ExcelUtils{

    // filePath - excel.xlsx
    // sheetName - Login

    // try{} - catch{}

    // wb - sheets = {login = "", sheet1 = "",...} - sheet["login"]

    static getDataFromExcel(filePath:string, sheetName:string){
        try{
            const wb = xlsx.readFile(filePath)
            const sheet = wb.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data
        }
        catch(e){
            console.log(e);
        }

    }

    // qa, stg, prod


}
