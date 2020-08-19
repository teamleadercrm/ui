yamllint:
			docker run --rm -ti -v $(shell pwd):/design-ui -w /design-ui/ci teamleader/yamllint:latest . -d .yamllint

fly-validate:
			docker run --rm -ti -v $(shell pwd):/design-ui -w /design-ui/ci teamleader/concourse-fly:6.2

set-pipeline:
			fly -t tl set-pipeline -p design-ui -c ci/pipeline.yaml -l ci/params.yaml -l ci/common-vars.yaml
