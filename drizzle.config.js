/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://interviewIQ_owner:XZx62hlDKaCy@ep-little-salad-a5srtfa7.us-east-2.aws.neon.tech/interviewIQ?sslmode=require' ,
    }
  };