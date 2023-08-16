import { sendMail } from "../../service/mailService"
const handler = async (req:any, res:any) => {
  try {
    const { method } = req;
    console.log(req.body)
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          req.name,
          req.email,
          req.message
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;