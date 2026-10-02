import { expect, test } from '@playwright/test';
import { createConnection } from 'mysql2/promise';

const databaseName = 'test';
const tableName = 'table';

test('connects to the test database and verifies the table exists', async () => {
  const databaseUser = process.env.DB_USER;
  test.skip(!databaseUser, 'Set DB_USER to enable this MySQL integration test.');

  const connection = await createConnection({
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    user: databaseUser,
    password: process.env.DB_PASSWORD ?? '',
    database: databaseName,
  });

  try {
    const [rows] = await connection.execute(
      'SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?',
      [databaseName, tableName],
    );

    expect(rows).toHaveLength(1);
  } finally {
    await connection.end();
  }
});