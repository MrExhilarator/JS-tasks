function getMiddle(s)
{
  let len=s.length;
  let ind=Math.floor(len/2);
  return len%2==0 ? s[ind-1]+s[ind] : s[ind];
}