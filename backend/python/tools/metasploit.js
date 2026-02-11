import { spawn } from 'child_process'

const metasploit = (commands) => {

    console.log("ejecutando metasploit \n!!!")
    const msfconsole = spawn('msfconsole', ['-q'], { shell: true })

    msfconsole.stdin.write(commands)
    msfconsole.stdin.end()

    msfconsole.stdout.on('data', (data) => {
        console.log(data.toString())
    })
    msfconsole.stderr.on('data', (data) => {
        console.error(data.toString())
    })
    msfconsole.on('close', (code) => {
        console.log(`child process exited with code ${code} escaneo terminado`)
    })
}

metasploit()