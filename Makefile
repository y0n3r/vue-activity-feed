deploy:
	@echo "\nMAKE: Building output files.\n"
	yarn build

	@echo "\nMAKE: Deploying to S3.\n"
	yarn deploy