package main

import (
	"fmt"
	"net/http"
)

func home_page(mpage http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(mpage, "mjsj")
}

func main() {
	http.HandleFunc("/", home_page)
	http.ListenAndServe(":8080", nil)
}
