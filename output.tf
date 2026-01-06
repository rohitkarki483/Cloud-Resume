output "api_url" {
  description = "Base URL of the API Gateway"
  value       = aws_apigatewayv2_api.resume_api.api_endpoint
}
