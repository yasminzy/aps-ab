import fs from "node:fs/promises"
import matter from "gray-matter"

const tables = await fs.readdir("./docs/lkps/")

const data = await Promise.all(
  tables.map(async (table) => {
    const file = matter.read(`./docs/lkps/${table}`, {
      excerpt: true,
      excerpt_separator: "<script setup>"
    })

    const { data, path } = file

    return {
      ...data,
      title: path.replace("./docs/lkps/", "").replace(".md", "").trim()
    }
  })
)

await fs.writeFile(
  "./docs/.vitepress/stores/lkps.json",
  JSON.stringify(data),
  "utf-8"
)
