type QueueJob<Q extends String, P> = {
    queue: Q,
    payload: P,
}

type WelcomeEmail = {
    to: string,
    body: string
}

type ProcessPayment = {
    userName: string,
    accountID: number
}

type WelcomeEmailJob = QueueJob<"email", WelcomeEmail>
type ProcessPaymentJob = QueueJob<"batch", ProcessPayment>

type QueueName<J extends QueueJob<string, unknown>> = J extends QueueJob<infer N, unknown> ? N : never

type EmailQueue = QueueName<WelcomeEmailJob>
type PaymentQueue = QueueName<ProcessPaymentJob>