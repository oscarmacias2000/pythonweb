import metasploit from "./metasploit";

export function scanHTTP(ip) {
    metasploit(
        `use auxiliary/scanner/http/http_version
        set RHOSTS ${ip}
        set RPORT 3000
        run
        exit`
    );
}

export function scanFTP(ip) {
    metasploit(
        `use auxiliary/scanner/ftp/ftp_version
        set RHOSTS ${ip}
        set RPORT 3000
        run
        exit`
    );
}

export function scanSSH(ip) {
    metasploit(
        `use auxiliary/scanner/ssh/ssh_version
        set RHOSTS ${ip}
        set RPORT 3000
        run
        exit`
    );
}

