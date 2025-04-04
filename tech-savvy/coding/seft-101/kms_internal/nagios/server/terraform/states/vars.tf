variable "region" {
  description = "The region of AWS products"
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "The name of the AWS S3 bucket"
  default     = "terraform-bucket"
}

variable "db_table" {
  description = "The name of the AWS DynamoDB table"
  default     = "terraform_state"
}

variable "aws_access_key" {}
variable "aws_secret_key" {
  sensitive = true
}