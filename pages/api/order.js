import { client } from "../../lib/client";

const sanityClient = client.withConfig({
  apiVersion: "2022-04-21",
});

export default async function handler (req, res) {
  switch(req.method) {
    case "POST":
      const newOrder = await JSON.parse(req.body);
      try {
        await sanityClient.create({
          _type: 'orders',
          name: newOrder.name,
          address: newOrder.address,
          phone: newOrder.phone,
          total: newOrder.total,
          method: newOrder.method,
          status: 1
        }).then((data) => {
          res.status(200).json(data._id)
        })
      } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error, check console."})
      }
      break
    default:
      res.status(404).json({msg: "Invalid Request"});
  }
}
