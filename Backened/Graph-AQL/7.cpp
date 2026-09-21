#include<iostream>
#include<vector>
#include<cctype>
using namespace std;
class Solution{
  public:
  bool check(int n,int i,int j,vector<string>&board){
     int row=i-1;
     int col=j-1;
     // left diagonal 
     while(row>=0 && col>=0){
        if(board[row][col]=='Q'){
            return 0;
        }
        row--,col--;
     }
     // Right Diagonal
     row=i-1;
     col =j+1;
     while(row>=0 && col<n){
          if(board[row][col]=='Q'){
            return 0;
        }
        row--,col++;
     }
     return 1;
  }
  void find(int row,vector<vector<string>>&ans, vector<string>&board,int n,vector<bool>&column){
      if(row==n){
        ans.push_back(board);
        return;
      }
     
      for(int j=0; j<n; j++){
        if(column[j]==0 && check(n,row,j,board)){
           column[j]=1;
           board[row][j]='Q';

           find(row+1,ans,board,n,column);
           column[j]=0;
           board[row][j]='.';
        }
      }

  }
  vector<vector<string>>answer(int n){
    vector<vector<string>>ans;
    vector<string>board(n);
    for(int i=0; i<n; i++){
       for(int j=0; j<n; j++){
        board[i].push_back('.');
       }
    }
    vector<bool>column(n,0);
    find(0,ans,board,n,column);

    return ans;
  }
};
int main() {
    int n;
    cin>>n; 
    Solution obj;
    vector<vector<string>>ans=obj.answer(n);
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            cout<<ans[i][j]<<endl;
        }
        cout<<endl;
    }
    

}