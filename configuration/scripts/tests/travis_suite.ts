# Test         Grid    PEs        Sets    BFB-compare
smoke          gx3     1x2        run2day
smoke          gx3     1x1        debug,run1day
smoke          gx3     2x2        debug,run1day
smoke          gx3     2x1        run2day,thread  smoke_gx3_1x2_run2day
restart        gx3     2x1
restart        gx3     1x2
# JRA55 tests
smoke          gx3     1x2        jra55_gx3,run2day
smoke          gx3     1x1        jra55_gx3,debug,run1day
smoke          gx3     2x2        jra55_gx3,debug,run1day
smoke          gx3     2x1        jra55_gx3,run2day,thread  smoke_gx3_1x2_jra55_gx3_run2day
restart        gx3     2x1        jra55_gx3
restart        gx3     1x2        jra55_gx3
