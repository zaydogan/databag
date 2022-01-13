/*
 * DataBag
 *
 * DataBag provides storage for decentralized identity based self-hosting apps. It is intended to support sharing of personal data and hosting group conversations. 
 *
 * API version: 0.0.1
 * Contact: roland.osborne@gmail.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package main

import (
	"log"
	"net/http"
	app "databag/internal"
  store "databag/internal/store"
)

func main() {

  store.SetPath("databag.db");

	log.Printf("Server started")

	router := app.NewRouter()

	log.Fatal(http.ListenAndServe(":7000", router))
}