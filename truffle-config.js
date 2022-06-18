
ubuntu@ip-172-31-15-252:~/packt3$ cat truffle-config.js
module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "ec2-54-212-188-52.us-west-2.compute.amazonaws.com",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
}

