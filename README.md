# Project Gödel Visual Studio Code extension
Test harnesses used to run [Project Gödel](https://godel.dev) solutions.

To use it, create a file name `task-id.spooky` (for example `distributed-add.spooky` for the task `distributed-add`), and run the `Gödel: Test Task` command.
The command will prompt you for an input file and run a local test harness in your terminal.

## Requirements
Java 14 or later must be installed on the system.
Java is located by looking for
1. the `java.home` VS Code configuration variable
1. the `JDK_HOME` environment variable
1. the `JAVA_HOME` environment variable
1. a `java` binary on the system path
