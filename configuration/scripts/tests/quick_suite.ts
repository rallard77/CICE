# Test         Grid    PEs        Sets    BFB-compare
smoke          gx3     8x2        jra55_gx3,diag1,run5day       
smoke          gx3     1x1        jra55_gx3,diag1,run1day       
restart        gbox128 8x1        diag1
restart        gx3     4x2        jra55_gx3,debug,diag1,run5day
smoke          gx3     4x1        jra55_gx3,diag1,run5day,thread   smoke_gx3_8x2_diag1_jra55_gx3_run5day
