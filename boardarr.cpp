#include <iostream>
using namespace std;
int main()
{
	int board[20][37];
	for(int i=0;i<20;i++)
	{
		for(int j=0;j<37;j++)
		{
			board[i][j]=1;
		}
	}

	// for(int i=1;i<=19;i++)
	// {
	//     board[i][0] = board[i][0]+board[i-1][0];
	// }
	// for(int i=1;i<=36;i++)
	// {
	//     board[0][i] = board[0][i] + board[0][i-1];
	// }
	// for(int  i=1;i<=19;i++)
	// {
	//     for(int j=1;j<=36;j++)
	//     {
	//         board[i][j] += min(board[i-1][j-1],min(board[i-1][j],board[i][j-1])) ;
	//     }
	// }

	for(int i=0;i<20;i++)
	{
		cout<<"["<<" ";
		for(int j=0;j<37;j++)
		{
			cout<<board[i][j];
			if(j!=36)	cout<<" , ";
		}
		cout<<" ]"<<endl;
		if(i!=19)	cout<<",";
	}

	return 0;
}