# test-architect-app-name-for-v10

## Deployment

```bash
arc deploy --name PR99
```

## The Problem

After some testing, it appears that upgrading `@architect/functions` to `5.0.3` causes the problem; the below versions work fine.

```json
"dependencies": {
  "@architect/architect": "^10.0.2",
  "@architect/functions": "^4.1.2"
},
```

## Testing

Navigate to the API, `/user/123`.

With Architect v9 you get a 404, however with Architect v10 you get:

```json
{"message":"Internal Server Error"}
```

And the following logs:

```json
{
    "errorType": "Runtime.UnhandledPromiseRejection",
    "errorMessage": "AccessDeniedException: User: arn:aws:sts::406091954977:assumed-role/TestArchitectAppNameStagingPR99-Role-1KK3WB2JCY347/TestArchitectAppNameStagingPR9-GetUserIdHTTPLambda-51O7i9WWtYtO is not authorized to perform: ssm:GetParametersByPath on resource: arn:aws:ssm:ca-central-1:406091954977:parameter/TestArchitectAppNameStaging because no identity-based policy allows the ssm:GetParametersByPath action",
    "reason": {
        "errorType": "AccessDeniedException",
        "errorMessage": "User: arn:aws:sts::406091954977:assumed-role/TestArchitectAppNameStagingPR99-Role-1KK3WB2JCY347/TestArchitectAppNameStagingPR9-GetUserIdHTTPLambda-51O7i9WWtYtO is not authorized to perform: ssm:GetParametersByPath on resource: arn:aws:ssm:ca-central-1:406091954977:parameter/TestArchitectAppNameStaging because no identity-based policy allows the ssm:GetParametersByPath action",
        "code": "AccessDeniedException",
        "message": "User: arn:aws:sts::406091954977:assumed-role/TestArchitectAppNameStagingPR99-Role-1KK3WB2JCY347/TestArchitectAppNameStagingPR9-GetUserIdHTTPLambda-51O7i9WWtYtO is not authorized to perform: ssm:GetParametersByPath on resource: arn:aws:ssm:ca-central-1:406091954977:parameter/TestArchitectAppNameStaging because no identity-based policy allows the ssm:GetParametersByPath action",
        "time": "2022-03-01T00:44:10.148Z",
        "requestId": "bed90bc0-8171-4382-b811-feef923a243d",
        "statusCode": 400,
        "retryable": false,
        "retryDelay": 18.78129852039887,
        "stack": [
            "AccessDeniedException: User: arn:aws:sts::406091954977:assumed-role/TestArchitectAppNameStagingPR99-Role-1KK3WB2JCY347/TestArchitectAppNameStagingPR9-GetUserIdHTTPLambda-51O7i9WWtYtO is not authorized to perform: ssm:GetParametersByPath on resource: arn:aws:ssm:ca-central-1:406091954977:parameter/TestArchitectAppNameStaging because no identity-based policy allows the ssm:GetParametersByPath action",
            "    at Request.extractError (/var/runtime/node_modules/aws-sdk/lib/protocol/json.js:52:27)",
            "    at Request.callListeners (/var/runtime/node_modules/aws-sdk/lib/sequential_executor.js:106:20)",
            "    at Request.emit (/var/runtime/node_modules/aws-sdk/lib/sequential_executor.js:78:10)",
            "    at Request.emit (/var/runtime/node_modules/aws-sdk/lib/request.js:686:14)",
            "    at Request.transition (/var/runtime/node_modules/aws-sdk/lib/request.js:22:10)",
            "    at AcceptorStateMachine.runTo (/var/runtime/node_modules/aws-sdk/lib/state_machine.js:14:12)",
            "    at /var/runtime/node_modules/aws-sdk/lib/state_machine.js:26:10",
            "    at Request.<anonymous> (/var/runtime/node_modules/aws-sdk/lib/request.js:38:9)",
            "    at Request.<anonymous> (/var/runtime/node_modules/aws-sdk/lib/request.js:688:12)",
            "    at Request.callListeners (/var/runtime/node_modules/aws-sdk/lib/sequential_executor.js:116:18)"
        ]
    },
    "promise": {},
    "stack": [
        "Runtime.UnhandledPromiseRejection: AccessDeniedException: User: arn:aws:sts::406091954977:assumed-role/TestArchitectAppNameStagingPR99-Role-1KK3WB2JCY347/TestArchitectAppNameStagingPR9-GetUserIdHTTPLambda-51O7i9WWtYtO is not authorized to perform: ssm:GetParametersByPath on resource: arn:aws:ssm:ca-central-1:406091954977:parameter/TestArchitectAppNameStaging because no identity-based policy allows the ssm:GetParametersByPath action",
        "    at process.<anonymous> (/var/runtime/index.js:35:15)",
        "    at process.emit (events.js:400:28)",
        "    at process.emit (domain.js:475:12)",
        "    at processPromiseRejections (internal/process/promises.js:245:33)",
        "    at processTicksAndRejections (internal/process/task_queues.js:96:32)"
    ]
}
```
