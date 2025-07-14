/* 
JS => synchronous and single threaded by default

Execution Context => execute one line of code at a time
=>each execution waits for the last one to complete
=> CALL stack, Memory Heap


Blocking code => block the flow of program => Read file sync

Non-Blocking code => does not block execution => read file async

// Refer 08_events/image.png for explanation of event loop
=> whenever program executes a call stack is created => global execution context created in call stack => function loaded one by one => once excution done unloaded one by one

// Fetch api => goes to high priority queue instead of task queue and are give priority over others
*/