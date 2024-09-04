import fs from "fs";
import path from "path";

// Function to get JSON data
export function getData() {
  const filePath = path.join(process.cwd(), "lib", "../data/data.json");

  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  //   console.log(data);
  return data;
}
