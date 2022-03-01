@app
test-architect-app-name

@http
get     /
get     /user/:id

@aws
# profile default
region ca-central-1
runtime nodejs14.x

@static
fingerprint false
folder build

@tables
users
  encrypt true
  id *String
