# Virtual Memory Management Simulator: OPT and LRU Page Replacement

## Project Overview
This project is developed for the **SECR2043/SCSR2043 Operating System Group Project**. The main purpose of this project is to create a simple visualization and simulation tool that explains how **Virtual Memory Management** works, focusing on two page replacement algorithms:
1. **OPT (Optimal Page Replacement)**
2. **LRU (Least Recently Used)**

## Topic
**Virtual Memory Management – Replacement Algorithm: OPT, LRU**

## Project Description
In an operating system, virtual memory allows a program to use more memory than the physical RAM available. Programs are divided into smaller parts called **pages**, while RAM is divided into fixed-size spaces called **frames**.
When a page requested by the CPU is not available in RAM, a **page fault** occurs. If all memory frames are already full, the operating system must choose one page to remove and replace with the new page. This decision is made using a **page replacement algorithm**.

This project simulates that process by showing how OPT and LRU handle page requests step by step.

## Algorithms Used
### 1. OPT Page Replacement Algorithm
OPT, also known as the Optimal Page Replacement Algorithm, replaces the page that will not be used for the longest time in the future.
This algorithm gives the best possible result because it produces the lowest number of page faults. However, it cannot be fully implemented in real operating systems because future page requests are not known in advance. Therefore, OPT is mainly used as a benchmark to compare other algorithms.

### 2. LRU Page Replacement Algorithm
LRU stands for Least Recently Used. This algorithm replaces the page that has not been used for the longest time in the past.
LRU is more practical than OPT because it uses past page usage instead of future knowledge. It is commonly used to explain how real operating systems can estimate which page is less likely to be used soon.

## Features
* User can enter a custom page reference string.
* User can set the number of memory frames.
* User can choose between OPT and LRU algorithms.
* Step-by-step simulation using a “Next Step” button.
* Auto-run simulation feature.
* Visual display of memory frames.
* Shows whether each page request is a page hit or page fault.
* Explains why a page is replaced.
* Generates a step-by-step result table.
* Displays total page faults and page hits.

## Technologies Used
* HTML
* CSS
* JavaScript

## How to Run the Project
1. Download or clone this repository.
2. Open the project folder.
3. Open the `index.html` file using any web browser.
4. Enter the page reference string.
5. Enter the number of memory frames.
6. Select either the OPT or LRU algorithm.
7. Click **Start**.
8. Use **Next Step** or **Auto Run** to view the simulation.

## Expected Output
* The current page request.
* The current memory frame contents.
* Whether the request is a page hit or page fault.
* Which page is replaced.
* The reason for replacement.
* A complete step-by-step result table.
* Total page faults and page hits.

## Future Improvements
* Adding a comparison mode to show OPT and LRU side by side.
* Adding charts to compare page faults and page hits.
* Allowing users to save or export the result table.
* Improving the animation of page replacement.
* Adding more page replacement algorithms such as FIFO and Second Chance.

## Group Members
EZRA, MARS, TASYA, NAZNEEN
