import * as juntar_pipe from "./juntar.pipe"
// @ponicode
describe("transform", () => {
    let inst: any

    beforeEach(() => {
        inst = new juntar_pipe.JuntarPipe()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.transform(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.transform(["elio@example.com", "Elio"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.transform("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.transform({ key0: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.transform({ key0: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.transform("")
        }
    
        expect(callFunction).not.toThrow()
    })
})
