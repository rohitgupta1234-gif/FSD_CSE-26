#include<iostream>
#include<vector>
using namespace std;
int pivot(vector<int>&a,int p,int r){
     int pivotElement=a[r];
     int i=p-1;
     for(int j=p; j<r; j++){
        if(a[j]<pivotElement){
            i++;
            swap(a[i],a[j]);
        }
     }
     swap(a[i+1],a[r]);
     return (i+1);
}
void quicksort(vector<int>&a,int p,int r){
    
    if(p<r){
        int q = pivot(a,p,r);
        quicksort(a,p,q-1);
        quicksort(a,q+1,r);
    }
    return;
}
int main() {
    int n;
    cin>>n;
    vector<int>a(n);
    for(int i=0; i<n; i++){
        cin>>a[i];
    }
    quicksort(a,0,n-1);
    for(int i=0; i<n; i++){
        cout<<a[i]<<" ";
    }
}