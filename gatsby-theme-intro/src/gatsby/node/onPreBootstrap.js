const fs = require("fs")

module.exports = ({ reporter }, options) => {
  let contentPath = options.contentPath || "content/"

  if (!contentPath.endsWith("/")) {
    contentPath += "/"
  }

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory with sample data`)
    fs.mkdirSync(contentPath)
    fs.mkdirSync(`${contentPath}images`)

    const filesToCopy = [
      "profile.yaml",
      "projects.yaml",
      "social.yaml",
      "work-history.yaml",
      "images/mmarkham.jpg",
      "images/mmarkham2.jpg",
      "images/mmarkham3.jpg",
      "images/project.jpg",
    ]

    filesToCopy.forEach((file) =>
      fs.copyFileSync(
        `${__dirname}/../../../content/${file}`,
        `${contentPath}${file}`
      )
    )
  }
}
