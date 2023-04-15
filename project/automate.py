import pyautogui, time

lines = []
with open("codes.txt", "r") as f:
    lines = f.read().split("\n")

time.sleep(5)
c = 1
for i in lines:
    pyautogui.write(i, interval=0.1)
    pyautogui.click()
    time.sleep(0.5)
    pyautogui.click()
    print("entered code: " + i + " # " + str(c) + " $" + str(c * 2))
    c += 1
    time.sleep(1)