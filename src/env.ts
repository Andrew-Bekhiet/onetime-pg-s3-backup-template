import { envsafe, str } from "envsafe"

export const env = envsafe({
  AWS_ACCESS_KEY_ID: str(),
  AWS_SECRET_ACCESS_KEY: str(),
  AWS_S3_BUCKET: str(),
  AWS_S3_REGION: str({
    allowEmpty: true,
    default: "",
  }),
  PG_DUMP_ARGS: str({
    allowEmpty: true,
    default: "",
    desc: "Additional args to pg_dump command",
  }),
  BACKUP_DATABASE_URL: str({
    desc: "The connection string of the database to backup.",
  }),
  AWS_S3_ENDPOINT: str({
    desc: "The S3 custom endpoint you want to use.",
    default: "",
    allowEmpty: true,
  }),
})
