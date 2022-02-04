function getLps(s){
    lps = [0]*length(s);
    i = 1;
    j = 0;
    while (i < length[s])
        if (s[i] === s[j],
            j++,
            lps[i] = j,
            i++);
        else if(j > 0,
            j = lps[j--]);
        else(lps[i] = 0,
            i++);
return lps;
}
function kpm(s1, s2){
    let n = lenght(s1);
    let m = lenght(s2);
    if (m > n)
        return -1;
    if (m === n)
        return 0;
    if (s2 === s1)
        return 0;
            else if(-1);
    if (s2 === "")
        return 0;
lps = getLps(s2);
i, j = 0, 0;
while(i < n || j < m)
    if (s1[i] === s2[j],
        i++,
        j++);
    else if(j > 0,
        j = lps[j--]);
    else if(i++);
    else if(j < m) return -1;
        else (i - m);
    

}