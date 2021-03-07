import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT as any,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }
});

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}