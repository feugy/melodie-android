'use strict'

const { readdir } = require('fs-extra')
const { back } = require('androidjs')

console.log('listening...')
back.on('read-folder', readFolder)

async function readFolder(path) {
  console.log(`reading ${path}`)
  try {
    for (const entry of await readdir(path, { withFileTypes: true })) {
      back.send('entry', entry)
    }
  } catch (err) {
    console.error(`Failed to read folder ${path}: ${err.message}`, err)
  }
}
