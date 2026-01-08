output "cloudfront_distribution_id" {
  description = "CloudFront Distribution ID"
  value = aws_cloudfront_distribution.resume.id
}

output "api_url" {
  description = "Base URL of the API Gateway"
  value       = aws_apigatewayv2_api.resume_api.api_endpoint
}
