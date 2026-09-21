#include<iostream>
#include<vector>
using namespace std;
class Solution {
public:
    bool isSafe(vector<string>& board, int row, int col, int n) {
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q')
                return false;
        }
        // Left Diagonal check
        int i = row - 1;
         int j = col - 1;

        while (i >= 0 && j >= 0) {
        if (board[i][j] == 'Q')
        return false;

        i--;
        j--;
       }

       // Right Diagonal
       int i = row - 1;
       int j = col + 1;

       while (i >= 0 && j < n) {
        if (board[i][j] == 'Q')
        return false;
         i--;
         j++;
         }

   

        return true;
    }

    void solve(vector<string>& board, int row, int n, vector<vector<string>>& ans) {
        if (row == n) {
            ans.push_back(board);
            return;
        }

        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col, n)) {
                board[row][col] = 'Q';

                solve(board, row + 1, n, ans);

                board[row][col] = '.';
            }
        }
    }

    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> ans;
        vector<string> board;

        for (int i = 0; i < n; i++) {
            string row = "";

            for (int j = 0; j < n; j++) {
                row += '.';
            }

            board.push_back(row);
        }

        solve(board, 0, n, ans);

        return ans;
    }
};
int main() {
    
}