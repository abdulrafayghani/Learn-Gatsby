    const faunadb = require('faunadb'),
        q = faunadb.query;
     require('dotenv').config()
     q = faunadb.query

     exports.handler = async (event, context ) => {
        try{
            if(event.httpMethod !== "POST"){
                return{
                    statusCode: 405, 
                    body: "Method is not allowed"
                }
            }

            let reqObj = JSON.parse(event.body)

            var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET })

            var result = await client.query(
                q.Create(
                    q.Collection('directory'),
                    {data: { firstName: reqObj.firstName, lastName: reqObj.lastName, age: reqObj.age }}
                )
            )

            return {
                statusCode: 200, 
                body: JSON.stringify({ id: `${result.ref.id}` })
            }
        } catch (err) {
            return { statusCode: 400, body: err.toString() }
        }
     }