const { detailedDiff} = require("deep-object-diff")

it("example 1: no changes between two large objects", () => {

    const previous = {
        username: "jest",
        givenName:"hest",
        familyName: "gest",
        alotoffields1: "_",
        alotoffields11: "_",
        alotoffields253: "_",
        alotoffields254: "_",
        alotoffields541: "_",
        alotoffields124: "_",
        alotoffields4: "_",
        alotoffields5: "_",
        email: "jest@jest.com",
        searchable: true,
        a2: "foo",
        a3: "foo",
        a4: "foo",
        a5: "foo",
        a7: "foo",
        departments: [
            {
                a: "jest",
                b: "hest"
            }
        ],
    }
    const current = {
        username: "jest",
        givenName:"hest",
        a2: "foo",
        alotoffields1: "_",
        alotoffields11: "_",
        alotoffields253: "_",
        a3: "foo",
        a4: "foo",
        a5: "foo",
        a7: "foo",
        familyName: "gest",
        email: "jest@jest.com",
        searchable: true,
        alotoffields254: "_",
        alotoffields541: "_",
        alotoffields124: "_",
        alotoffields4: "_",
        alotoffields5: "_",
        departments: [
            {
               
                a: "jest",
                b: "hest"
            }
        ],
    }

    const {added, deleted, updated} = detailedDiff(previous, current)

    // expects no changes between objects
    expect(Object.keys(added)).toHaveLength(0)
    expect(Object.keys(deleted)).toHaveLength(0)
    expect(Object.keys(updated)).toHaveLength(0)

})

it("example 2: only dates should change", () => {

    const previous = {
        username: "jest",
        givenName:"hest",
        familyName: "gest",
        alotoffields1: "_",
        alotoffields11: "_",
        alotoffields253: "_",
        alotoffields254: "_",
        alotoffields541: "_",
        alotoffields124: "_",
        alotoffields4: "_",
        alotoffields5: "_",
        email: "jest@jest.com",
        searchable: true,
        a: "foo",
        a2: "foo",
        a3: "foo",
        a4: "foo",
        a5: "foo",

        a7: "foo",
        departments: [
            {
                a: "jest",
                b: "hest"
            }
        ],
        updatedAt: "2022-08-01",
        savedAt: "2022-08-01"
    }
    const current = {
        updatedAt: "2022-10-01",
        savedAt: "2022-09-01",
        username: "jest",
        givenName:"hest",
        a: "foo",
        a2: "foo",
        alotoffields1: "_",
        alotoffields11: "_",
        alotoffields253: "_",
        a3: "foo",
        a4: "foo",
        a5: "foo",
 
        a7: "foo",
        familyName: "gest",
        email: "jest@jest.com",
        searchable: true,
        alotoffields254: "_",
        alotoffields541: "_",
        alotoffields124: "_",
        alotoffields4: "_",
        alotoffields5: "_",
        departments: [
            {
                a: "jest",
                b: "hest"
            }
        ],
    }

    const {added, deleted, updated} = detailedDiff(previous, current)

    expect(Object.keys(added)).toHaveLength(0)

    expect(Object.keys(deleted)).toHaveLength(0)

    expect(updated).toEqual({
        updatedAt: "2022-10-01",
        savedAt: "2022-09-01",
    })

})

