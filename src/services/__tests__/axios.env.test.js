import { exec } from "child_process";
import { expect, test } from "@jest/globals"

test("Valida requisições HTTP em endereços externos com Axios via certificado para ambientes com VPN | proxy/firewall", (done) => {
    exec("node axios.env.mjs", (error, stdout, stderr) => {
        expect(error).toBeNull();
        expect(stdout).toMatch(/ Sucesso :/)
        done()
    })
})