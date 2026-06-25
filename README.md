# Virtual Memory Management Simulator: OPT & LRU

This project is a web-based simulation for the Operating System course **SECR2043/SCSR2043**. It demonstrates how page replacement algorithms work in Virtual Memory Management, focusing on **OPT (Optimal Page Replacement)** and **LRU (Least Recently Used)**.

## Project Overview

In an operating system, virtual memory allows programs to run even when physical memory is limited. When RAM is full and a new page is requested, the operating system must decide which page should be removed. This process is called **page replacement**.

This simulator helps users understand how two page replacement algorithms make replacement decisions:

- **OPT** replaces the page that will be used farthest in the future.
- **LRU** replaces the page that was least recently used in the past.

## Features

- User input for reference string
- User input for number of memory frames
- Selection between OPT and LRU algorithm
- Step-by-step simulation
- Auto-run simulation
- Visual memory frame display
- Page hit and page fault counter
- Explanation for each step
- Table output showing frame changes

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Run

1. Download or clone this repository.
2. Open the `index.html` file in any web browser.
3. Enter a reference string, for example:

   ```text
   7 0 1 2 0 3 0 4 2 3 0 3
