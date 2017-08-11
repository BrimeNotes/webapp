# brimeAPI (LEGACY)
Legacy API for BrimeNotes

**Show User (GET /user)**
----

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
      ```javascript
      { id : 61, 
        email : "batman@batcave.in",
        firstName : "Bruce",
        lastName : "Wayne",
        birthDate : "1939-02-19"
      }
      ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "Requires Authentication" }`
