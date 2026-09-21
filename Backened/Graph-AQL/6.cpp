#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:

    bool check(int n, vector<string>& Board, int i, int j) {

        // Upper Left Diagonal
        int row = i - 1;
        int col = j - 1;

        while(row >= 0 && col >= 0) {
            if(Board[row][col] == 'Q') {
                return false;
            }

            row--;
            col--;
        }

        // Upper Right Diagonal
        row = i - 1;
        col = j + 1;

        while(row >= 0 && col < n) {
            if(Board[row][col] == 'Q') {
                return false;
            }

            row--;
            col++;
        }

        return true;
    }

    void find(int row, int n, vector<vector<string>>& ans,
              vector<string>& Board, vector<bool>& column) {

        // Base Condition
        if(row == n) {
            ans.push_back(Board);
            return;
        }

        for(int j = 0; j < n; j++) {

            if(column[j] == 0 && check(n, Board, row, j)) {

                // Place Queen
                column[j] = 1;
                Board[row][j] = 'Q';

                // Move to next row
                find(row + 1, n, ans, Board, column);

                // Backtracking
                column[j] = 0;
                Board[row][j] = '.';
            }
        }
    }

    vector<vector<string>> solveNQueens(int n) {

        vector<vector<string>> ans;

        vector<string> Board(n);

        // Create empty board
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                Board[i].push_back('.');
            }
        }

        vector<bool> column(n, 0);

        find(0, n, ans, Board, column);

        return ans;
    }
};

int main() {

    Solution obj;

    int n;
    cin >> n;

    vector<vector<string>> ans = obj.solveNQueens(n);

    for(auto board : ans) {
        for(auto row : board) {
            cout << row << endl;
        }

        cout << endl;
    }

    return 0;
}