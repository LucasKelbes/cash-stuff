import pyautogui, time

lines = []
with open("codes.txt", "r") as f:
    lines = f.read().split("\n")

time.sleep(5)
for i in lines:
    pyautogui.write(i)
    pyautogui.click()
    time.sleep(1)
    pyautogui.click()
    print("entered code: " + i)