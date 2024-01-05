export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const supabaseUrl = "https://hcoygcxhsxjzlfnzgckj.supabase.co";
      const apiUrl = `${supabaseUrl}/rest/v1/Events_duplicate`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          apikey: process.env.SUPABASE_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      res.status(200).json({ data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
