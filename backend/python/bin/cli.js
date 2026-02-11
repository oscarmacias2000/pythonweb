import { scanHTTP, scanFTP, scanSSH } from "../tools/vuln";
import { Command } from "commander";

const program = new Command();

program
    .name("msfconsole")
    .version("1.0.0")
    .description("CLI for Metasploit")
    .command("scan-vuln <ip>")
    .description("Scan for vulnerabilities")
    .action((ip) => {
        scanHTTP(ip);
        scanFTP(ip);
        scanSSH(ip);
    });

program.parse(process.argv);

