from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

def get_chrome_driver():
    chrome_options = webdriver.ChromeOptions()
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)
    return driver

def save_page_source(url, file_name):
    driver = get_chrome_driver()
    driver.get(url)
    with open(file_name, 'w', encoding='utf-8') as file:
        file.write(driver.page_source)
    driver.quit()

# URL of the page you want to scrape
url = "http://localhost:5173/"
save_page_source(url, "page.html")
print('HTML saved to page.html')