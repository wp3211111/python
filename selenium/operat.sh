read -p "input your code    :" code 
echo -e "\033[32m "$code" \033[0m"

sed -i 's/829926/'$code'/g' ./RegisterTemplate1ViewController.m
