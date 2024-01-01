// Problem Statement

// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with;and each cookie j has a size s[j]. 
//  If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. 
//  Your goal is to maximize the number of your content children and output the maximum number.

// Input: (g = [1, 2, 3]), (s = [1, 1]);
// Output: 1;

// Input: (g = [1, 2]), (s = [1, 2, 3]);
// Output: 2;

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const cookieLength = s.length;
    if(cookieLength == 0){
        return 0;
    }
    g.sort((a,b)=> a-b);
    s.sort((a,b)=> a-b);
    let res = 0;
    let i = cookieLength -1;
    let j = g.length -1 ;
    while(i>=0 && j>=0){
        if(g[j] <= s[i]){
            j--;
            i--;
            res++;
        }
        else{
            j--;
        }
    }
    return res;
};
 