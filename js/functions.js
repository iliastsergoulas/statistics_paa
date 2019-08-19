function responsivefy(t) {
    var e = d3.select(t.node().parentNode),
        a = parseInt(t.style("width")),
        n = parseInt(t.style("height")),
        r = a / n;

    function l() {
        var a = parseInt(e.style("width"));
        t.attr("width", a), t.attr("height", Math.round(a / r))
    }
    t.attr("viewBox", "0 0 " + a + " " + n).attr("perserveAspectRatio", "xMinYMid").call(l), d3.select(window).on("resize." + e.attr("id"), l)
}

function mymap(t) {
    if (document.getElementById("mapaelmap").innerHTML = "", document.getElementById("mapaellegend").innerHTML = "", "el-GR" == t) {
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/regions", function(t, e) {
            var a = {},
                n = {},
                r = {},
                l = {},
                o = {},
                i = {},
                s = {},
                c = {},
                d = {};
            n.areas = {}, r.areas = {}, l.areas = {}, o.areas = {}, i.areas = {}, s.areas = {}, c.areas = {}, d.areas = {};
            var p = 0,
                u = 0,
                m = 0,
                f = 0,
                g = 0,
                x = 0,
                h = 0,
                y = 0;
            e.forEach(function(t) {
                n.areas[[t.region]] = {}, n.areas[[t.region]].value = Number(t.entekx), n.areas[[t.region]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region + "</span><br />Εντάξεις εκχωρημένων Δράσεων Περιφέρειας: " + t.entekx + " εκατ. Ευρώ"
                }, p = Math.max(t.entekx, p), r.areas[[t.region]] = {}, r.areas[[t.region]].value = Number(t.entfull), r.areas[[t.region]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region + "</span><br />Εντάξεις ΠΑΑ Περιφέρειας: " + t.entfull + " εκατ. Ευρώ"
                }, u = Math.max(t.entfull, u), l.areas[[t.region]] = {}, l.areas[[t.region]].value = 100 * Number(t.entekxpct), l.areas[[t.region]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region + "</span><br />Εντάξεις εκχωρημένων Δράσεων (% εκχώρησης): " + Number((100 * t.entekxpct).toFixed(2)) + " %"
                }, m = Math.max(t.entekxpct, m), o.areas[[t.region]] = {}, o.areas[[t.region]].value = 100 * Number(t.entfullpct), o.areas[[t.region]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region + "</span><br />Εντάξεις ΠΑΑ Περιφέρειας (% χώρας): " + Number((100 * t.entfullpct).toFixed(2)) + " %"
                }, f = Math.max(t.entfullpct, f), i.areas[[t.region]] = {}, i.areas[[t.region]].value = Number(t.plirekx), i.areas[[t.region]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region + "</span><br />Πληρωμές εκχωρημένων Δράσεων Περιφέρειας: " + t.plirekx + " εκατ. Ευρώ"
                }, g = Math.max(t.plirekx, g), s.areas[[t.region]] = {}, s.areas[[t.region]].value = Number(t.plirfull), s.areas[[t.region]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region + "</span><br />Πληρωμές ΠΑΑ Περιφέρειας: " + t.plirfull + " εκατ. Ευρώ"
                }, x = Math.max(t.plirfull, x), c.areas[[t.region]] = {}, c.areas[[t.region]].value = 100 * Number(t.plirekxpct), c.areas[[t.region]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region + "</span><br />Πληρωμές εκχωρημένων Δράσεων (% εκχώρησης): " + Number((100 * t.plirekxpct).toFixed(2)) + " %"
                }, h = Math.max(t.plirekxpct, h), d.areas[[t.region]] = {}, d.areas[[t.region]].value = 100 * Number(t.plirfullpct), d.areas[[t.region]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region + "</span><br />Πληρωμές ΠΑΑ Περιφέρειας (% χώρας): " + Number((100 * t.plirfullpct).toFixed(2)) + " %"
                }, y = Math.max(t.plirfullpct, y)
            }), a["Εντάξεις εκχωρημένων Δράσεων (εκατ. Ευρώ)"] = n, a["Εντάξεις ΠΑΑ Περιφέρειας (εκατ. Ευρώ)"] = r, a["Εντάξεις εκχωρημένων Δράσεων (% εκχώρησης)"] = l, a["Εντάξεις ΠΑΑ Περιφέρειας (% χώρας)"] = o, a["Πληρωμές εκχωρημένων Δράσεων (εκατ. Ευρώ)"] = i, a["Πληρωμές ΠΑΑ Περιφέρειας (εκατ. Ευρώ)"] = s, a["Πληρωμές εκχωρημένων Δράσεων (% εκχώρησης)"] = c, a["Πληρωμές ΠΑΑ Περιφέρειας (% χώρας)"] = d, $(function() {
                $("#mapselection").on("change", function() {
                    var t = document.getElementById("mapselection"),
                        n = t.options[t.selectedIndex].value;
                    "Εντάξεις εκχωρημένων Δράσεων (εκατ. Ευρώ)" == n ? e = p : "Εντάξεις ΠΑΑ Περιφέρειας (εκατ. Ευρώ)" == n ? e = u : "Εντάξεις εκχωρημένων Δράσεων (% εκχώρησης)" == n ? e = 100 * m : "Εντάξεις ΠΑΑ Περιφέρειας (% χώρας)" == n ? e = 100 * f : "Πληρωμές εκχωρημένων Δράσεων (εκατ. Ευρώ)" == n ? e = g : "Πληρωμές ΠΑΑ Περιφέρειας (εκατ. Ευρώ)" == n ? e = x : "Πληρωμές εκχωρημένων Δράσεων (% εκχώρησης)" == n ? e = 100 * h : "Πληρωμές ΠΑΑ Περιφέρειας (% χώρας)" == n && (e = 100 * y), $(".world").trigger("update", [{
                        mapOptions: {
                            legend: {
                                area: {
                                    slices: [{
                                        max: e / 5,
                                        attrs: {
                                            fill: "#a1d99b"
                                        },
                                        label: "Έως " + (e / 5).toFixed(2)
                                    }, {
                                        min: e / 5,
                                        max: 2 * e / 5,
                                        attrs: {
                                            fill: "#74c476"
                                        },
                                        label: "Από " + (e / 5).toFixed(2) + " έως " + (2 * e / 5).toFixed(2)
                                    }, {
                                        min: 2 * e / 5,
                                        max: 3 * e / 5,
                                        attrs: {
                                            fill: "#41ab5d"
                                        },
                                        label: "Από " + (2 * e / 5).toFixed(2) + " έως " + (3 * e / 5).toFixed(2)
                                    }, {
                                        min: 3 * e / 5,
                                        max: 4 * e / 5,
                                        attrs: {
                                            fill: "#238b45"
                                        },
                                        label: "Από " + (3 * e / 5).toFixed(2) + " έως " + (4 * e / 5).toFixed(2)
                                    }, {
                                        min: 4 * e / 5,
                                        attrs: {
                                            fill: "#00441b"
                                        },
                                        label: "Πάνω από " + (4 * e / 5).toFixed(2)
                                    }]
                                }
                            }
                        }
                    }]), $(".world").trigger("update", [{
                        mapOptions: a[n],
                        animDuration: 300
                    }])
                });
                var t = document.getElementById("mapselection"),
                    e = (t.options[t.selectedIndex].value, 100 * m);
                $world = $(".world"), $world.mapael({
                    map: {
                        name: "world_countries",
                        defaultArea: {
                            attrs: {
                                fill: "#fff",
                                stroke: "#232323",
                                "stroke-width": .3
                            }
                        },
                        defaultPlot: {
                            text: {
                                attrs: {
                                    fill: "#b4b4b4",
                                    "font-weight": "normal"
                                },
                                attrsHover: {
                                    fill: "#fff",
                                    "font-weight": "bold"
                                }
                            }
                        },
                        zoom: {
                            enabled: !0,
                            step: .25,
                            maxLevel: 20
                        }
                    },
                    legend: {
                        area: {
                            display: !0,
                            title: "Κατηγορίες",
                            marginBottom: 7,
                            slices: [{
                                max: e / 5,
                                attrs: {
                                    fill: "#a1d99b"
                                },
                                label: "Έως " + (e / 5).toFixed(2)
                            }, {
                                min: e / 5,
                                max: 2 * e / 5,
                                attrs: {
                                    fill: "#74c476"
                                },
                                label: "Από " + (e / 5).toFixed(2) + " έως " + (2 * e / 5).toFixed(2)
                            }, {
                                min: 2 * e / 5,
                                max: 3 * e / 5,
                                attrs: {
                                    fill: "#41ab5d"
                                },
                                label: "Από " + (2 * e / 5).toFixed(2) + " έως " + (3 * e / 5).toFixed(2)
                            }, {
                                min: 3 * e / 5,
                                max: 4 * e / 5,
                                attrs: {
                                    fill: "#238b45"
                                },
                                label: "Από " + (3 * e / 5).toFixed(2) + " έως " + (4 * e / 5).toFixed(2)
                            }, {
                                min: 4 * e / 5,
                                attrs: {
                                    fill: "#00441b"
                                },
                                label: "Πάνω από " + (4 * e / 5).toFixed(2)
                            }]
                        }
                    },
                    areas: a["Εντάξεις εκχωρημένων Δράσεων (% εκχώρησης)"].areas
                })
            })
        });
        var e = [];
        $.getJSON("http://data.agrotikianaptixi.gr/myindex.php/regions", function(t) {
            t.forEach(function(t) {
                var a = {};
                a.region = t.region, a.entfull = Number(t.entfull).toFixed(2).toLocaleString(), a.plirfull = Number(t.plirfull).toFixed(2).toLocaleString(), a.entfullpct = (100 * Number(t.entfullpct)).toFixed(2).toLocaleString(), a.plirfullpct = (100 * Number(t.plirfullpct)).toFixed(2).toLocaleString(), a.ekxwr = Number(t.funds).toFixed(2).toLocaleString(), a.entekx = Number(t.entekx).toFixed(2).toLocaleString(), a.pctentekx = (100 * Number(t.entekxpct)).toFixed(2).toLocaleString(), a.plirekx = Number(t.plirekx).toFixed(2).toLocaleString(), a.pctplirekx = (100 * Number(t.plirekxpct)).toFixed(2).toLocaleString(), e.push(a)
            });
            $("#mytable1").tabulator("clearData"), $("#mytable1").tabulator("setColumns", [{
                title: "Περιφέρεια",
                field: "region",
                sorter: "string"
            }, {
                title: "Σύνολο Μέτρων ΠΑΑ 2014-2020 (εκατ. Ευρώ)",
                columns: [{
                    title: "Εντάξεις",
                    field: "entfull"
                }, {
                    title: "Πληρωμές",
                    field: "plirfull"
                }, {
                    title: "% Εντάξεις",
                    field: "entfullpct"
                }, {
                    title: "% Πληρωμές",
                    field: "plirfullpct"
                }]
            }, {
                title: "Εκχωρημένοι πόροι σε Περιφέρειες για Μέτρα ΠΑΑ 2014-2020 (εκατ. Ευρώ)",
                columns: [{
                    title: "Εκχωρήσεις",
                    field: "ekxwr"
                }, {
                    title: "Εντάξεις",
                    field: "entekx"
                }, {
                    title: "% Εντάξεις",
                    field: "pctentekx"
                }, {
                    title: "Πληρωμές",
                    field: "plirekx"
                }, {
                    title: "% Πληρωμές",
                    field: "pctplirekx"
                }]
            }]), $("#mytable1").tabulator("setData", e)
        })
    } else if ("en" == t) {
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/regions", function(t, e) {
            var a = {},
                n = {},
                r = {},
                l = {},
                o = {},
                i = {},
                s = {},
                c = {},
                d = {};
            n.areas = {}, r.areas = {}, l.areas = {}, o.areas = {}, i.areas = {}, s.areas = {}, c.areas = {}, d.areas = {};
            var p = 0,
                u = 0,
                m = 0,
                f = 0,
                g = 0,
                x = 0,
                h = 0,
                y = 0;
            e.forEach(function(t) {
                n.areas[[t.region_en]] = {}, n.areas[[t.region_en]].value = Number(t.entekx), n.areas[[t.region_en]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region_en + "</span><br />Approvals - Actions delegated to Regions: " + t.entekx + " mil €"
                }, p = Math.max(t.entekx, p), r.areas[[t.region_en]] = {}, r.areas[[t.region_en]].value = Number(t.entfull), r.areas[[t.region_en]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region_en + "</span><br />Approvals - RDP in Regions: " + t.entfull + " mil €"
                }, u = Math.max(t.entfull, u), l.areas[[t.region_en]] = {}, l.areas[[t.region_en]].value = 100 * Number(t.entekxpct), l.areas[[t.region_en]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region_en + "</span><br />Approvals - Actions delegated to Regions (% delegation): " + Number((100 * t.entekxpct).toFixed(2)) + " %"
                }, m = Math.max(t.entekxpct, m), o.areas[[t.region_en]] = {}, o.areas[[t.region_en]].value = 100 * Number(t.entfullpct), o.areas[[t.region_en]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region_en + "</span><br />Approvals - RDP in Regions (% country): " + Number((100 * t.entfullpct).toFixed(2)) + " %"
                }, f = Math.max(t.entfullpct, f), i.areas[[t.region_en]] = {}, i.areas[[t.region_en]].value = Number(t.plirekx), i.areas[[t.region_en]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region_en + "</span><br />Payments - Actions delegated to Regions: " + t.plirekx + " mil €"
                }, g = Math.max(t.plirekx, g), s.areas[[t.region_en]] = {}, s.areas[[t.region_en]].value = Number(t.plirfull), s.areas[[t.region_en]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region_en + "</span><br />Payments - RDP in Regions: " + t.plirfull + " mil €"
                }, x = Math.max(t.plirfull, x), c.areas[[t.region_en]] = {}, c.areas[[t.region_en]].value = 100 * Number(t.plirekxpct), c.areas[[t.region_en]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region_en + "</span><br />Payments -Actions delegated to Regions (% delegation)): " + Number((100 * t.plirekxpct).toFixed(2)) + " %"
                }, h = Math.max(t.plirekxpct, h), d.areas[[t.region_en]] = {}, d.areas[[t.region_en]].value = 100 * Number(t.plirfullpct), d.areas[[t.region_en]].tooltip = {
                    content: '<span style="font-weight:bold;">' + t.region_en + "</span><br />Payments - RDP in Regions (% country): " + Number((100 * t.plirfullpct).toFixed(2)) + " %"
                }, y = Math.max(t.plirfullpct, y)
            }), a["Approvals in delegated actions(mil €)"] = n, a["Approvals - RDP in Regions (mil €)"] = r, a["Approvals - Actions delegated to Regions (% delegation)"] = l, a["Approvals - RDP in Regions (% country)"] = o, a["Payments in delegated actions (mil €)"] = i, a["Payments - RDP in Regions (mil €)"] = s, a["Payments -Actions delegated to Regions (% delegation))"] = c, a["Payments - RDP in Regions (% country)"] = d, $(function() {
                $("#mapselection").on("change", function() {
                    var t = document.getElementById("mapselection"),
                        n = t.options[t.selectedIndex].value;
                    "Approvals in delegated actions(mil €)" == n ? e = p : "Approvals - RDP in Regions (mil €)" == n ? e = u : "Approvals - Actions delegated to Regions (% delegation)" == n ? e = 100 * m : "Approvals - RDP in Regions (% country)" == n ? e = 100 * f : "Payments in delegated actions (mil €)" == n ? e = g : "Payments - RDP in Regions (mil €)" == n ? e = x : "Payments -Actions delegated to Regions (% delegation)" == n ? e = 100 * h : "Payments - RDP in Regions (% country)" == n && (e = 100 * y), $(".world").trigger("update", [{
                        mapOptions: {
                            legend: {
                                area: {
                                    slices: [{
                                        max: e / 5,
                                        attrs: {
                                            fill: "#a1d99b"
                                        },
                                        label: "To " + (e / 5).toFixed(2)
                                    }, {
                                        min: e / 5,
                                        max: 2 * e / 5,
                                        attrs: {
                                            fill: "#74c476"
                                        },
                                        label: "From " + (e / 5).toFixed(2) + " to " + (2 * e / 5).toFixed(2)
                                    }, {
                                        min: 2 * e / 5,
                                        max: 3 * e / 5,
                                        attrs: {
                                            fill: "#41ab5d"
                                        },
                                        label: "From " + (2 * e / 5).toFixed(2) + " to " + (3 * e / 5).toFixed(2)
                                    }, {
                                        min: 3 * e / 5,
                                        max: 4 * e / 5,
                                        attrs: {
                                            fill: "#238b45"
                                        },
                                        label: "From " + (3 * e / 5).toFixed(2) + " to " + (4 * e / 5).toFixed(2)
                                    }, {
                                        min: 4 * e / 5,
                                        attrs: {
                                            fill: "#00441b"
                                        },
                                        label: "Over " + (4 * e / 5).toFixed(2)
                                    }]
                                }
                            }
                        }
                    }]), $(".world").trigger("update", [{
                        mapOptions: a[n],
                        animDuration: 300
                    }])
                });
                var t = document.getElementById("mapselection"),
                    e = (t.options[t.selectedIndex].value, 100 * m);
                $world = $(".world"), $world.mapael({
                    map: {
                        name: "world_countries_en",
                        defaultArea: {
                            attrs: {
                                fill: "#fff",
                                stroke: "#232323",
                                "stroke-width": .3
                            }
                        },
                        defaultPlot: {
                            text: {
                                attrs: {
                                    fill: "#b4b4b4",
                                    "font-weight": "normal"
                                },
                                attrsHover: {
                                    fill: "#fff",
                                    "font-weight": "bold"
                                }
                            }
                        },
                        zoom: {
                            enabled: !0,
                            step: .25,
                            maxLevel: 20
                        }
                    },
                    legend: {
                        area: {
                            display: !0,
                            title: "Categories",
                            marginBottom: 7,
                            slices: [{
                                max: e / 5,
                                attrs: {
                                    fill: "#a1d99b"
                                },
                                label: "To " + (e / 5).toFixed(2)
                            }, {
                                min: e / 5,
                                max: 2 * e / 5,
                                attrs: {
                                    fill: "#74c476"
                                },
                                label: "From " + (e / 5).toFixed(2) + " to " + (2 * e / 5).toFixed(2)
                            }, {
                                min: 2 * e / 5,
                                max: 3 * e / 5,
                                attrs: {
                                    fill: "#41ab5d"
                                },
                                label: "From " + (2 * e / 5).toFixed(2) + " to " + (3 * e / 5).toFixed(2)
                            }, {
                                min: 3 * e / 5,
                                max: 4 * e / 5,
                                attrs: {
                                    fill: "#238b45"
                                },
                                label: "From " + (3 * e / 5).toFixed(2) + " to " + (4 * e / 5).toFixed(2)
                            }, {
                                min: 4 * e / 5,
                                attrs: {
                                    fill: "#00441b"
                                },
                                label: "Over " + (4 * e / 5).toFixed(2)
                            }]
                        }
                    },
                    areas: a["Approvals - Actions delegated to Regions (% delegation)"].areas
                })
            })
        });
        e = [];
        $.getJSON("http://data.agrotikianaptixi.gr/myindex.php/regions", function(t) {
            t.forEach(function(t) {
                var a = {};
                a.region = t.region_en, a.entfull = Number(t.entfull).toFixed(2).toLocaleString(), a.plirfull = Number(t.plirfull).toFixed(2).toLocaleString(), a.entfullpct = (100 * Number(t.entfullpct)).toFixed(2).toLocaleString(), a.plirfullpct = (100 * Number(t.plirfullpct)).toFixed(2).toLocaleString(), a.ekxwr = Number(t.funds).toFixed(2).toLocaleString(), a.entekx = Number(t.entekx).toFixed(2).toLocaleString(), a.pctentekx = (100 * Number(t.entekxpct)).toFixed(2).toLocaleString(), a.plirekx = Number(t.plirekx).toFixed(2).toLocaleString(), a.pctplirekx = (100 * Number(t.plirekxpct)).toFixed(2).toLocaleString(), e.push(a)
            });
            $("#mytable1").tabulator("clearData"), $("#mytable1").tabulator("setColumns", [{
                title: "Region",
                field: "region",
                sorter: "string"
            }, {
                title: "RDP 2014-2020 Measures (mil €)",
                columns: [{
                    title: "Approvals",
                    field: "entfull"
                }, {
                    title: "Payments",
                    field: "plirfull"
                }, {
                    title: "% Approvals",
                    field: "entfullpct"
                }, {
                    title: "% Payments",
                    field: "plirfullpct"
                }]
            }, {
                title: "Delegated funds to Regions for RDP 2014-2020 Measures (mil €)",
                columns: [{
                    title: "Delegated",
                    field: "ekxwr"
                }, {
                    title: "Approvals",
                    field: "entekx"
                }, {
                    title: "% Approvals",
                    field: "pctentekx"
                }, {
                    title: "Payments",
                    field: "plirekx"
                }, {
                    title: "% Payments",
                    field: "pctplirekx"
                }]
            }]), $("#mytable1").tabulator("setData", e)
        })
    }
}

function myclld(t) {
    if (d3.select("#clldproskliseis").selectAll("svg").remove(), d3.select("#clldentaxeis").selectAll("svg").remove(), d3.select("#clldpliromes").selectAll("svg").remove(), "el-GR" == t) {
        var e = 600 - (A = {
                top: 25,
                right: 20,
                bottom: 80,
                left: 50
            }).left - A.right,
            a = 300 - A.top - A.bottom,
            n = d3.format(".0%"),
            r = d3.scale.ordinal().rangeRoundBands([0, e], .1, 1),
            l = d3.scale.linear().range([a, 0]),
            o = d3.svg.axis().scale(r).orient("bottom"),
            i = d3.svg.axis().scale(l).orient("left").tickFormat(n),
            s = d3.select("#clldproskliseis").append("svg").attr("width", e + A.left + A.right).attr("height", a + A.top + A.bottom).call(responsivefy).append("g").attr("transform", "translate(" + A.left + "," + A.top + ")");
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/otdbullets", function(t, n) {
            n.forEach(function(t) {
                t.pctproskl = +t.pctproskl
            }), r.domain(n.map(function(t) {
                return t.otdsymbol
            })), l.domain([0, d3.max(n, function(t) {
                return t.pctproskl
            })]);
            var c = d3.tip().attr("class", "d3-tip").offset([-10, 0]).html(function(t) {
                return "<span style='color:white'>" + t.otdnick + ": " + Number(100 * t.pctproskl).toFixed(2) + "%</span>"
            });
            s.append("g").attr("class", "x axis").attr("transform", "translate(0," + a + ")").call(o).selectAll("text").attr("transform", "rotate(-65 12 32)"), s.append("g").attr("class", "y axis").call(i).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("% Προσκλήσεις επί εκχωρημένων πόρων"), s.append("text").attr("x", e / 2).attr("y", 0 - A.top / 2).attr("text-anchor", "middle").style("font-size", "100%").style("text-decoration", "underline").text("Προσκλήσεις"), s.selectAll(".barproskliseis").data(n).enter().append("rect").attr("class", "barproskliseis").attr("x", function(t) {
                return r(t.otdsymbol)
            }).attr("width", r.rangeBand()).attr("y", function(t) {
                return l(t.pctproskl)
            }).attr("height", function(t) {
                return a - l(t.pctproskl)
            }).on("mouseover", c.show).on("mouseout", c.hide), s.call(c), d3.select("#input1").on("change", p);
            var d = setTimeout(function() {
                d3.select("#input1").property("checked", !0).each(p)
            }, 2e3);

            function p() {
                clearTimeout(d);
                var t = r.domain(n.sort(this.checked ? function(t, e) {
                    return e.pctproskl - t.pctproskl
                } : function(t, e) {
                    return d3.ascending(t.otdsymbol, e.otdsymbol)
                }).map(function(t) {
                    return t.otdsymbol
                })).copy();
                s.selectAll(".barproskliseis").sort(function(e, a) {
                    return t(e.otdsymbol) - t(a.otdsymbol)
                });
                var e = s.transition().duration(750),
                    a = function(t, e) {
                        return 50 * e
                    };
                e.selectAll(".barproskliseis").delay(a).attr("x", function(e) {
                    return t(e.otdsymbol)
                }), e.select(".x.axis").call(o).selectAll("g").delay(a)
            }
        });
        var c = 600 - (_ = {
                top: 25,
                right: 20,
                bottom: 80,
                left: 50
            }).left - _.right,
            d = 300 - _.top - _.bottom,
            p = (n = d3.format(".0%"), d3.scale.ordinal().rangeRoundBands([0, c], .1, 1)),
            u = d3.scale.linear().range([d, 0]),
            m = d3.svg.axis().scale(p).orient("bottom"),
            f = d3.svg.axis().scale(u).orient("left").tickFormat(n),
            g = d3.select("#clldentaxeis").append("svg").attr("width", c + _.left + _.right).attr("height", d + _.top + _.bottom).call(responsivefy).append("g").attr("transform", "translate(" + _.left + "," + _.top + ")");
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/otdbullets", function(t, e) {
            e.forEach(function(t) {
                t.pctent = +t.pctent
            }), p.domain(e.map(function(t) {
                return t.otdsymbol
            })), u.domain([0, d3.max(e, function(t) {
                return t.pctent
            })]);
            var a = d3.tip().attr("class", "d3-tip").offset([-10, 0]).html(function(t) {
                return "<span style='color:white'>" + t.otdnick + ": " + Number(100 * t.pctent).toFixed(2) + "%</span>"
            });
            g.append("g").attr("class", "x axis").attr("transform", "translate(0," + d + ")").call(m).selectAll("text").attr("transform", "rotate(-65 12 32)"), g.append("g").attr("class", "y axis").call(f).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("% Εντάξεις επί εκχωρημένων πόρων"), g.append("text").attr("x", c / 2).attr("y", 0 - _.top / 2).attr("text-anchor", "middle").style("font-size", "100%").style("text-decoration", "underline").text("Εντάξεις"), g.selectAll(".barentaxeis").data(e).enter().append("rect").attr("class", "barentaxeis").attr("x", function(t) {
                return p(t.otdsymbol)
            }).attr("width", p.rangeBand()).attr("y", function(t) {
                return u(t.pctent)
            }).attr("height", function(t) {
                return d - u(t.pctent)
            }).on("mouseover", a.show).on("mouseout", a.hide), g.call(a), d3.select("#input2").on("change", r);
            var n = setTimeout(function() {
                d3.select("#input2").property("checked", !0).each(r)
            }, 2e3);

            function r() {
                clearTimeout(n);
                var t = p.domain(e.sort(this.checked ? function(t, e) {
                    return e.pctent - t.pctent
                } : function(t, e) {
                    return d3.ascending(t.otdsymbol, e.otdsymbol)
                }).map(function(t) {
                    return t.otdsymbol
                })).copy();
                g.selectAll(".barentaxeis").sort(function(e, a) {
                    return t(e.otdsymbol) - t(a.otdsymbol)
                });
                var a = g.transition().duration(750),
                    r = function(t, e) {
                        return 50 * e
                    };
                a.selectAll(".barentaxeis").delay(r).attr("x", function(e) {
                    return t(e.otdsymbol)
                }), a.select(".x.axis").call(m).selectAll("g").delay(r)
            }
        });
        var x = 600 - (N = {
                top: 25,
                right: 20,
                bottom: 80,
                left: 50
            }).left - N.right,
            h = 300 - N.top - N.bottom,
            y = (n = d3.format(".0%"), d3.scale.ordinal().rangeRoundBands([0, x], .1, 1)),
            b = d3.scale.linear().range([h, 0]),
            v = d3.svg.axis().scale(y).orient("bottom"),
            k = d3.svg.axis().scale(b).orient("left").tickFormat(n),
            F = d3.select("#clldpliromes").append("svg").attr("width", x + N.left + N.right).attr("height", h + N.top + N.bottom).call(responsivefy).append("g").attr("transform", "translate(" + N.left + "," + N.top + ")");
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/otdbullets", function(t, e) {
            e.forEach(function(t) {
                t.pctplir = 0
            }), y.domain(e.map(function(t) {
                return t.otdsymbol
            })), b.domain([0, d3.max(e, function(t) {
                return t.pctplir
            })]);
            var a = d3.tip().attr("class", "d3-tip").offset([-10, 0]).html(function(t) {
                return "<span style='color:white'>" + t.otdnick + ": " + Number(100 * t.pctplir).toFixed(2) + "%</span>"
            });
            F.append("g").attr("class", "x axis").attr("transform", "translate(0," + h + ")").call(v).selectAll("text").attr("transform", "rotate(-65 12 32)"), F.append("g").attr("class", "y axis").call(k).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("% Πληρωμές επί εκχωρημένων πόρων"), F.append("text").attr("x", x / 2).attr("y", 0 - N.top / 2).attr("text-anchor", "middle").style("font-size", "100%").style("text-decoration", "underline").text("Πληρωμές"), F.selectAll(".barpliromes").data(e).enter().append("rect").attr("class", "barpliromes").attr("x", function(t) {
                return y(t.otdsymbol)
            }).attr("width", p.rangeBand()).attr("y", function(t) {
                return b(t.pctplir)
            }).attr("height", function(t) {
                return h - b(t.pctplir)
            }).on("mouseover", a.show).on("mouseout", a.hide), F.call(a), d3.select("#input3").on("change", r);
            var n = setTimeout(function() {
                d3.select("#input3").property("checked", !0).each(r)
            }, 2e3);

            function r() {
                clearTimeout(n);
                var t = y.domain(e.sort(this.checked ? function(t, e) {
                    return e.pctplir - t.pctplir
                } : function(t, e) {
                    return d3.ascending(t.otdsymbol, e.otdsymbol)
                }).map(function(t) {
                    return t.otdsymbol
                })).copy();
                F.selectAll(".barpliromes").sort(function(e, a) {
                    return t(e.otdsymbol) - t(a.otdsymbol)
                });
                var a = F.transition().duration(750),
                    r = function(t, e) {
                        return 50 * e
                    };
                a.selectAll(".barpliromes").delay(r).attr("x", function(e) {
                    return t(e.otdsymbol)
                }), a.select(".x.axis").call(v).selectAll("g").delay(r)
            }
        });
        var w = [];
        $.getJSON("http://data.agrotikianaptixi.gr/myindex.php/otdbullets", function(t) {
            t.forEach(function(t) {
                var e = {};
                e.otdnick = t.otdnick, e.pctproskl = (100 * t.pctproskl).toFixed(2).toLocaleString(), e.pctent = (100 * t.pctent).toFixed(2).toLocaleString(), e.pctplir = (100 * t.pctplir).toFixed(2).toLocaleString(), w.push(e)
            });
            $("#mytable3").tabulator("clearData"), $("#mytable3").tabulator("setColumns", [{
                title: "Απορρόφηση Τοπικών Προγραμμάτων CLLD",
                columns: [{
                    title: "Αναπτυξιακή Εταιρεία",
                    field: "otdnick",
                    sorter: "string",
                    widthGrow: 2
                }, {
                    title: "% Προσκλήσεις",
                    field: "pctproskl"
                }, {
                    title: "% Εντάξεις",
                    field: "pctent"
                }, {
                    title: "% Πληρωμές",
                    field: "pctplir"
                }]
            }]), $("#mytable3").tabulator("setData", w)
        })
    } else if ("en" == t) {
        var A;
        e = 600 - (A = {
            top: 25,
            right: 20,
            bottom: 80,
            left: 50
        }).left - A.right, a = 300 - A.top - A.bottom, n = d3.format(".0%"), r = d3.scale.ordinal().rangeRoundBands([0, e], .1, 1), l = d3.scale.linear().range([a, 0]), o = d3.svg.axis().scale(r).orient("bottom"), i = d3.svg.axis().scale(l).orient("left").tickFormat(n), s = d3.select("#clldproskliseis").append("svg").attr("width", e + A.left + A.right).attr("height", a + A.top + A.bottom).call(responsivefy).append("g").attr("transform", "translate(" + A.left + "," + A.top + ")");
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/otdbullets", function(t, n) {
            n.forEach(function(t) {
                t.pctproskl = +t.pctproskl
            }), r.domain(n.map(function(t) {
                return t.otdsymbol_en
            })), l.domain([0, d3.max(n, function(t) {
                return t.pctproskl
            })]);
            var c = d3.tip().attr("class", "d3-tip").offset([-10, 0]).html(function(t) {
                return "<span style='color:white'>" + t.otdnick_en + ": " + Number(100 * t.pctproskl).toFixed(2) + "%</span>"
            });
            s.append("g").attr("class", "x axis").attr("transform", "translate(0," + a + ")").call(o).selectAll("text").attr("transform", "rotate(-65 12 32)"), s.append("g").attr("class", "y axis").call(i).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("% Calls to delegated funds"), s.append("text").attr("x", e / 2).attr("y", 0 - A.top / 2).attr("text-anchor", "middle").style("font-size", "100%").style("text-decoration", "underline").text("Calls"), s.selectAll(".barproskliseis").data(n).enter().append("rect").attr("class", "barproskliseis").attr("x", function(t) {
                return r(t.otdsymbol_en)
            }).attr("width", r.rangeBand()).attr("y", function(t) {
                return l(t.pctproskl)
            }).attr("height", function(t) {
                return a - l(t.pctproskl)
            }).on("mouseover", c.show).on("mouseout", c.hide), s.call(c), d3.select("#input1").on("change", p);
            var d = setTimeout(function() {
                d3.select("#input1").property("checked", !0).each(p)
            }, 2e3);

            function p() {
                clearTimeout(d);
                var t = r.domain(n.sort(this.checked ? function(t, e) {
                    return e.pctproskl - t.pctproskl
                } : function(t, e) {
                    return d3.ascending(t.otdsymbol_en, e.otdsymbol_en)
                }).map(function(t) {
                    return t.otdsymbol_en
                })).copy();
                s.selectAll(".barproskliseis").sort(function(e, a) {
                    return t(e.otdsymbol_en) - t(a.otdsymbol_en)
                });
                var e = s.transition().duration(750),
                    a = function(t, e) {
                        return 50 * e
                    };
                e.selectAll(".barproskliseis").delay(a).attr("x", function(e) {
                    return t(e.otdsymbol_en)
                }), e.select(".x.axis").call(o).selectAll("g").delay(a)
            }
        });
        var _;
        c = 600 - (_ = {
            top: 25,
            right: 20,
            bottom: 80,
            left: 50
        }).left - _.right, d = 300 - _.top - _.bottom, n = d3.format(".0%"), p = d3.scale.ordinal().rangeRoundBands([0, c], .1, 1), u = d3.scale.linear().range([d, 0]), m = d3.svg.axis().scale(p).orient("bottom"), f = d3.svg.axis().scale(u).orient("left").tickFormat(n), g = d3.select("#clldentaxeis").append("svg").attr("width", c + _.left + _.right).attr("height", d + _.top + _.bottom).call(responsivefy).append("g").attr("transform", "translate(" + _.left + "," + _.top + ")");
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/otdbullets", function(t, e) {
            e.forEach(function(t) {
                t.pctent = 0
            }), p.domain(e.map(function(t) {
                return t.otdsymbol_en
            })), u.domain([0, d3.max(e, function(t) {
                return t.pctent
            })]);
            var a = d3.tip().attr("class", "d3-tip").offset([-10, 0]).html(function(t) {
                return "<span style='color:white'>" + t.otdnick_en + ": " + Number(100 * t.pctent).toFixed(2) + "%</span>"
            });
            g.append("g").attr("class", "x axis").attr("transform", "translate(0," + d + ")").call(m).selectAll("text").attr("transform", "rotate(-65 12 32)"), g.append("g").attr("class", "y axis").call(f).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("% Approvals to delegated funds"), g.append("text").attr("x", c / 2).attr("y", 0 - _.top / 2).attr("text-anchor", "middle").style("font-size", "100%").style("text-decoration", "underline").text("Approvals"), g.selectAll(".barentaxeis").data(e).enter().append("rect").attr("class", "barentaxeis").attr("x", function(t) {
                return p(t.otdsymbol_en)
            }).attr("width", p.rangeBand()).attr("y", function(t) {
                return u(t.pctent)
            }).attr("height", function(t) {
                return d - u(t.pctent)
            }).on("mouseover", a.show).on("mouseout", a.hide), g.call(a), d3.select("#input2").on("change", r);
            var n = setTimeout(function() {
                d3.select("#input2").property("checked", !0).each(r)
            }, 2e3);

            function r() {
                clearTimeout(n);
                var t = p.domain(e.sort(this.checked ? function(t, e) {
                    return e.pctent - t.pctent
                } : function(t, e) {
                    return d3.ascending(t.otdsymbol_en, e.otdsymbol_en)
                }).map(function(t) {
                    return t.otdsymbol_en
                })).copy();
                g.selectAll(".barentaxeis").sort(function(e, a) {
                    return t(e.otdsymbol_en) - t(a.otdsymbol_en)
                });
                var a = g.transition().duration(750),
                    r = function(t, e) {
                        return 50 * e
                    };
                a.selectAll(".barentaxeis").delay(r).attr("x", function(e) {
                    return t(e.otdsymbol_en)
                }), a.select(".x.axis").call(m).selectAll("g").delay(r)
            }
        });
        var N;
        x = 600 - (N = {
            top: 25,
            right: 20,
            bottom: 80,
            left: 50
        }).left - N.right, h = 300 - N.top - N.bottom, n = d3.format(".0%"), y = d3.scale.ordinal().rangeRoundBands([0, x], .1, 1), b = d3.scale.linear().range([h, 0]), v = d3.svg.axis().scale(y).orient("bottom"), k = d3.svg.axis().scale(b).orient("left").tickFormat(n), F = d3.select("#clldpliromes").append("svg").attr("width", x + N.left + N.right).attr("height", h + N.top + N.bottom).call(responsivefy).append("g").attr("transform", "translate(" + N.left + "," + N.top + ")");
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/otdbullets", function(t, e) {
            e.forEach(function(t) {
                t.pctplir = 0
            }), y.domain(e.map(function(t) {
                return t.otdsymbol_en
            })), b.domain([0, d3.max(e, function(t) {
                return t.pctplir
            })]);
            var a = d3.tip().attr("class", "d3-tip").offset([-10, 0]).html(function(t) {
                return "<span style='color:white'>" + t.otdnick_en + ": " + Number(100 * t.pctplir).toFixed(2) + "%</span>"
            });
            F.append("g").attr("class", "x axis").attr("transform", "translate(0," + h + ")").call(v).selectAll("text").attr("transform", "rotate(-65 12 32)"), F.append("g").attr("class", "y axis").call(k).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("% Payments to delegated funds"), F.append("text").attr("x", x / 2).attr("y", 0 - N.top / 2).attr("text-anchor", "middle").style("font-size", "100%").style("text-decoration", "underline").text("Payments"), F.selectAll(".barpliromes").data(e).enter().append("rect").attr("class", "barpliromes").attr("x", function(t) {
                return y(t.otdsymbol_en)
            }).attr("width", p.rangeBand()).attr("y", function(t) {
                return b(t.pctplir)
            }).attr("height", function(t) {
                return h - b(t.pctplir)
            }).on("mouseover", a.show).on("mouseout", a.hide), F.call(a), d3.select("#input3").on("change", r);
            var n = setTimeout(function() {
                d3.select("#input3").property("checked", !0).each(r)
            }, 2e3);

            function r() {
                clearTimeout(n);
                var t = y.domain(e.sort(this.checked ? function(t, e) {
                    return e.pctplir - t.pctplir
                } : function(t, e) {
                    return d3.ascending(t.otdsymbol_en, e.otdsymbol_en)
                }).map(function(t) {
                    return t.otdsymbol_en
                })).copy();
                F.selectAll(".barpliromes").sort(function(e, a) {
                    return t(e.otdsymbol_en) - t(a.otdsymbol_en)
                });
                var a = F.transition().duration(750),
                    r = function(t, e) {
                        return 50 * e
                    };
                a.selectAll(".barpliromes").delay(r).attr("x", function(e) {
                    return t(e.otdsymbol_en)
                }), a.select(".x.axis").call(v).selectAll("g").delay(r)
            }
        });
        w = [];
        $.getJSON("http://data.agrotikianaptixi.gr/myindex.php/otdbullets", function(t) {
            t.forEach(function(t) {
                var e = {};
                e.otdnick = t.otdnick_en, e.pctproskl = (100 * t.pctproskl).toFixed(2).toLocaleString(), e.pctent = (100 * t.pctent).toFixed(2).toLocaleString(), e.pctplir = (100 * t.pctplir).toFixed(2).toLocaleString(), w.push(e)
            });
            $("#mytable3").tabulator("clearData"), $("#mytable3").tabulator("setColumns", [{
                title: "CLLD status",
                columns: [{
                    title: "Development Agency",
                    field: "otdnick",
                    sorter: "string",
                    widthGrow: 2
                }, {
                    title: "% Calls",
                    field: "pctproskl"
                }, {
                    title: "% Approvals",
                    field: "pctent"
                }, {
                    title: "% Payments",
                    field: "pctplir"
                }]
            }]), $("#mytable3").tabulator("setData", w)
        });
        $("#download-csv3").click(function(){
            $("#mytable3").tabulator("download", "xlsx", "data.xlsx", {sheetName:"MyData"});
        });
    }
}

function mylines(t) {
    if ("el-GR" == t) {
        d3.select("#chart-line1").selectAll("svg").remove();
        var e = 1100 - (d = {
                top: 40,
                right: 60,
                bottom: 70,
                left: 80
            }).left - d.right,
            a = 400 - d.top - d.bottom,
            n = d3.time.format("%Y%m").parse,
            r = d3.time.scale().range([0, e]),
            l = d3.scale.linear().range([a, 0]),
            o = d3.svg.axis().scale(r).ticks(d3.time.months, 3).tickFormat(function(t) {
                var e = t.getTime() - 1e4,
                    a = new Date(e),
                    n = a.getMonth(),
                    r = a.getFullYear();
                return n <= 2 ? "Q1 " + r : n <= 5 ? "Q2 " + r : n <= 8 ? "Q3 " + r : "Q4 " + r
            }).orient("bottom"),
            i = d3.svg.axis().scale(l).orient("left").ticks(5),
            s = d3.svg.line().x(function(t) {
                return r(t.date)
            }).y(function(t) {
                return l(t.value)
            }),
            c = d3.select("#chart-line1").append("svg").attr("width", e + d.left + d.right).attr("height", a + d.top + d.bottom).call(responsivefy).append("g").attr("transform", "translate(" + d.left + "," + d.top + ")");
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/poreiapaa", function(t, p) {
			paymentsdata=p;
            p.forEach(function(t) {
                t.date = n(t.date), t.value = +Number(t.value)
            }), r.domain(d3.extent(p, function(t) {
                return t.date
            })), l.domain([0, d3.max(p, function(t) {
                return t.value
            })]);
            var u = d3.nest().key(function(t) {
                    return "Δημόσια Δαπάνη" == t.variable ? "Δημόσια Δαπάνη" : "Ενωσιακή Συμμετοχή"
                }).entries(p),
                m = d3.scale.category10();
			
            legendSpace = e / u.length, u.forEach(function(t, e) {
                c.append("path").attr("class", "line").style("stroke", function() {
                    return t.color = m(t.key)
                }).attr("d", s(t.values)), c.append("text").attr("x", legendSpace / 2 + e * legendSpace).attr("y", a + d.bottom / 2 + 5).attr("class", "legend").style("fill", function() {
                    return t.color = m(t.key)
                }).text(t.key)
            }), c.append("g").attr("class", "x axis").attr("transform", "translate(0," + a + ")").call(o), c.append("g").attr("class", "y axis").call(i)
        });
    } else {
        d3.select("#chart-line1").selectAll("svg").remove();
        var d;
        e = 1100 - (d = {
            top: 40,
            right: 60,
            bottom: 70,
            left: 80
        }).left - d.right, a = 400 - d.top - d.bottom, n = d3.time.format("%Y%m").parse, r = d3.time.scale().range([0, e]), l = d3.scale.linear().range([a, 0]), o = d3.svg.axis().scale(r).ticks(d3.time.months, 3).tickFormat(function(t) {
            var e = t.getTime() - 1e4,
                a = new Date(e),
                n = a.getMonth(),
                r = a.getFullYear();
            return n <= 2 ? "Q1 " + r : n <= 5 ? "Q2 " + r : n <= 8 ? "Q3 " + r : "Q4 " + r
        }).orient("bottom"), i = d3.svg.axis().scale(l).orient("left").ticks(5), s = d3.svg.line().x(function(t) {
            return r(t.date)
        }).y(function(t) {
            return l(t.value)
        }), c = d3.select("#chart-line1").append("svg").attr("width", e + d.left + d.right).attr("height", a + d.top + d.bottom).call(responsivefy).append("g").attr("transform", "translate(" + d.left + "," + d.top + ")");
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/poreiapaa", function(t, p) {
			paymentsdata=p;
            p.forEach(function(t) {
                t.date = n(t.date), t.value = +Number(t.value)
            }), r.domain(d3.extent(p, function(t) {
                return t.date
            })), l.domain([0, d3.max(p, function(t) {
                return t.value
            })]);
            var u = d3.nest().key(function(t) {
                    return "Δημόσια Δαπάνη" == t.variable ? "Public Expenditure" : "EU Contribution"
                }).entries(p),
                m = d3.scale.category10();
            legendSpace = e / u.length, u.forEach(function(t, e) {
                c.append("path").attr("class", "line").style("stroke", function() {
                    return t.color = m(t.key)
                }).attr("d", s(t.values)), c.append("text").attr("x", legendSpace / 2 + e * legendSpace).attr("y", a + d.bottom / 2 + 5).attr("class", "legend").style("fill", function() {
                    return t.color = m(t.key)
                }).text(t.key)
            }), c.append("g").attr("class", "x axis").attr("transform", "translate(0," + a + ")").call(o), c.append("g").attr("class", "y axis").call(i)
        });
    }
}

function mypriorities(t) {
    if ("el-GR" == t) {
        d3.select("#chart-line2").selectAll("svg").remove();
        var e = 1100 - (m = {
                top: 40,
                right: 50,
                bottom: 20,
                left: 40
            }).left - m.right,
            a = 400 - m.top - m.bottom,
            n = d3.scale.ordinal().rangeRoundBands([0, e], .1),
            r = d3.scale.ordinal(),
            o = d3.scale.linear().range([a, 0]),
            i = d3.scale.category20(),
            s = d3.scale.ordinal().range(i.range()),
            c = d3.svg.axis().scale(n).orient("bottom"),
            d = d3.svg.axis().scale(o).orient("left").tickFormat(d3.format(".2s")),
            p = d3.select("#chart-line2").append("div").attr("class", "toolTip"),
            u = d3.select("#chart-line2").append("svg").attr("width", e + m.left + m.right).attr("height", a + m.top + m.bottom).call(responsivefy).append("g").attr("transform", "translate(" + m.left + "," + m.top + ")");
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/priorities", function(t, i) {
			prioritiesdata=i;
            var m = JSON.stringify(i).replace(/"P2"/g, '"Ανταγωνιστικότητα"');
            m = (m = (m = (m = m.replace(/"P3"/g, '"Αλυσίδα Τροφίμων"')).replace(/"P4"/g, '"Περιβάλλον"')).replace(/"P5"/g, '"Εξοικονόμηση Φυσικών Πόρων"')).replace(/"P6"/g, '"Τοπική Ανάπτυξη"');
            var f = JSON.parse(m),
                g = d3.keys(f[0]).filter(function(t) {
                    return "year" !== t
                });
            f.forEach(function(t) {
                t.valores = g.map(function(e) {
                    return {
                        name: e,
                        value: +Number(t[e])
                    }
                })
            }), n.domain(f.map(function(t) {
                return t.year
            })), r.domain(g).rangeRoundBands([0, n.rangeBand()]), o.domain([0, d3.max(f, function(t) {
                return d3.max(t.valores, function(t) {
                    return t.value
                })
            })]), u.append("g").attr("class", "x axis").attr("transform", "translate(0," + a + ")").call(c), u.append("g").attr("class", "y axis").call(d).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("Δημόσια Δαπάνη (εκατ. €)");
            var x = u.selectAll(".bar").data(f).enter().append("g").attr("class", "rect").attr("transform", function(t) {
                return "translate(" + n(t.year) + ",0)"
            });
            x.selectAll("rect").data(function(t) {
                return t.valores
            }).enter().append("rect").attr("width", r.rangeBand()).attr("x", function(t) {
                return r(t.name)
            }).attr("y", function(t) {
                return o(t.value)
            }).attr("value", function(t) {
                return t.name
            }).attr("height", function(t) {
                return a - o(t.value)
            }).style("fill", function(t) {
                return s(t.name)
            }), x.on("mousemove", function(t) {
                p.style("left", d3.select(this).attr("cx") + "px"), p.style("top", d3.select(this).attr("cy") + "px"), p.style("display", "inline-block");
                d3.event.pageX, d3.event.pageY;
                var e = document.querySelectorAll(":hover");
                l = e.length, l -= 1, elementData = e[l].__data__, p.html(t.year + "<br>Προτεραιότητα " + elementData.name + "<br>" + elementData.value + "εκατ. €")
            }), x.on("mouseout", function(t) {
                p.style("display", "none")
            });
            var h = u.selectAll(".legend").data(g.slice()).enter().append("g").attr("class", "legend").attr("transform", function(t, e) {
                return "translate(0," + 20 * e + ")"
            });
            h.append("rect").attr("x", e - 18).attr("width", 18).attr("height", 18).style("fill", s), h.append("text").attr("x", e - 24).attr("y", 9).attr("dy", ".35em").style("text-anchor", "end").text(function(t) {
                return t
            })
        })
    } else {
        d3.select("#chart-line2").selectAll("svg").remove();
        var m;
        e = 1100 - (m = {
            top: 40,
            right: 50,
            bottom: 20,
            left: 40
        }).left - m.right, a = 400 - m.top - m.bottom, n = d3.scale.ordinal().rangeRoundBands([0, e], .1), r = d3.scale.ordinal(), o = d3.scale.linear().range([a, 0]), i = d3.scale.category20(), s = d3.scale.ordinal().range(i.range()), c = d3.svg.axis().scale(n).orient("bottom"), d = d3.svg.axis().scale(o).orient("left").tickFormat(d3.format(".2s")), p = d3.select("#chart-line2").append("div").attr("class", "toolTip"), u = d3.select("#chart-line2").append("svg").attr("width", e + m.left + m.right).attr("height", a + m.top + m.bottom).call(responsivefy).append("g").attr("transform", "translate(" + m.left + "," + m.top + ")");
        d3.json("http://data.agrotikianaptixi.gr/myindex.php/priorities", function(t, i) {
			prioritiesdata=i;
            var m = JSON.stringify(i).replace(/"P2"/g, '"Competitiveness"');
            m = (m = (m = (m = m.replace(/"P3"/g, '"Food Chain"')).replace(/"P4"/g, '"Environment"')).replace(/"P5"/g, '"Natural Resources Management"')).replace(/"P6"/g, '"Local Development"');
            var f = JSON.parse(m),
                g = d3.keys(f[0]).filter(function(t) {
                    return "year" !== t
                });
            f.forEach(function(t) {
                t.valores = g.map(function(e) {
                    return {
                        name: e,
                        value: +Number(t[e])
                    }
                })
            }), n.domain(f.map(function(t) {
                return t.year
            })), r.domain(g).rangeRoundBands([0, n.rangeBand()]), o.domain([0, d3.max(f, function(t) {
                return d3.max(t.valores, function(t) {
                    return t.value
                })
            })]), u.append("g").attr("class", "x axis").attr("transform", "translate(0," + a + ")").call(c), u.append("g").attr("class", "y axis").call(d).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("Public Expenditure (mil €)");
            var x = u.selectAll(".bar").data(f).enter().append("g").attr("class", "rect").attr("transform", function(t) {
                return "translate(" + n(t.year) + ",0)"
            });
            x.selectAll("rect").data(function(t) {
                return t.valores
            }).enter().append("rect").attr("width", r.rangeBand()).attr("x", function(t) {
                return r(t.name)
            }).attr("y", function(t) {
                return o(t.value)
            }).attr("value", function(t) {
                return t.name
            }).attr("height", function(t) {
                return a - o(t.value)
            }).style("fill", function(t) {
                return s(t.name)
            }), x.on("mousemove", function(t) {
                p.style("left", d3.select(this).attr("cx") + "px"), p.style("top", d3.select(this).attr("cy") + "px"), p.style("display", "inline-block");
                d3.event.pageX, d3.event.pageY;
                var e = document.querySelectorAll(":hover");
                l = e.length, l -= 1, elementData = e[l].__data__, p.html(t.year + "<br>Priority " + elementData.name + "<br>" + elementData.value + " mil €")
            }), x.on("mouseout", function(t) {
                p.style("display", "none")
            });
            var h = u.selectAll(".legend").data(g.slice()).enter().append("g").attr("class", "legend").attr("transform", function(t, e) {
                return "translate(0," + 20 * e + ")"
            });
            h.append("rect").attr("x", e - 18).attr("width", 18).attr("height", 18).style("fill", s), h.append("text").attr("x", e - 24).attr("y", 9).attr("dy", ".35em").style("text-anchor", "end").text(function(t) {
                return t
            })
        })
    }
}
Number.prototype.formatMoney = function(t, e, a) {
    var n = this,
        r = (t = isNaN(t = Math.abs(t)) ? 2 : t, e = void 0 == e ? "," : e, a = void 0 == a ? "." : a, n < 0 ? "-" : ""),
        l = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(t))),
        o = (o = l.length) > 3 ? o % 3 : 0;
    return r + (o ? l.substr(0, o) + a : "") + l.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + a) + (t ? e + Math.abs(n - l).toFixed(t).slice(2) : "")
};
$(document).ready(function() {
    var t = [];
    $.getJSON("http://data.agrotikianaptixi.gr/myindex.php/aporrofisi", function(e) {
        t.push(e[0]), today = t[0].today, document.getElementById("update").innerHTML = today
    })
});

function infographic(language){
	if (language=='en'){
		document.getElementById('ddbudget').innerHTML="<span class='badge badge-pill badge-success text-right'>5,64</span> bn € Public Expenditure";
		document.getElementById('eubudget').innerHTML="<span class='badge badge-pill badge-success text-right'>4,78</span> bn € EU Contribution";
		document.getElementById('pliromes_genh2').innerHTML="<span id='pliromes_gen'></span> bn € subsidy to the agricultural sector by RDP till today";
		document.getElementById('dikaiouxoi_genh2').innerHTML="<span id='dikaiouxoi_gen'></span> thousand farmers and businesses supported by RDP";
		document.getElementById('ektaria_genh2').innerHTML="<span id='ektaria_gen'></span> mil acres of agricultural and forest land in environmental actions";
		document.getElementById('katartisih2').innerHTML="<span id='katartisi'></span> thousand farmers in training programme";
		document.getElementById('neoi_genh2').innerHTML="<span id='neoi_gen'></span> thousand Young Farmers";
		document.getElementById('evrizh2').innerHTML="<span id='evriz'></span> thousand residents in agricultural areas with access to broadband";
		document.getElementById('dimosiah2').innerHTML="<span id='dimosia'></span> mil € in Public Investments";
	} else if (language=='el-GR'){
		document.getElementById('ddbudget').innerHTML="<span class='badge badge-pill badge-success text-right'>5,64</span> δις € Δημόσια Δαπάνη";
		document.getElementById('eubudget').innerHTML="<span class='badge badge-pill badge-success text-right'>4,78</span> δις € Συμμετοχή Ε.Ε.";
		document.getElementById('pliromes_genh2').innerHTML="<span id='pliromes_gen'></span> δις € ενίσχυση στον αγροτικό τομέα έως σήμερα από ΠΑΑ";
		document.getElementById('dikaiouxoi_genh2').innerHTML="<span id='dikaiouxoi_gen'></span> χιλ γεωργοί κ επιχειρήσεις ωφελήθηκαν από ενισχύσεις του ΠΑΑ";
		document.getElementById('ektaria_genh2').innerHTML="<span id='ektaria_gen'></span> εκατ. στρέμματα γεωργικής & δασικής γης σε περιβ/κές δράσεις";
		document.getElementById('katartisih2').innerHTML="<span id='katartisi'></span> χιλ γεωργοί σε πρόγραμμα κατάρτισης";
		document.getElementById('neoi_genh2').innerHTML="<span id='neoi_gen'></span> χιλ Νέοι Γεωργοί";
		document.getElementById('evrizh2').innerHTML="<span id='evriz'></span> χιλ κάτοικοι αγροτικών περιοχών αποκτούν ευρυζωνική πρόσβαση";
		document.getElementById('dimosiah2').innerHTML="<span id='dimosia'></span> εκατ. € σε Δημόσια Έργα";
	};
	var aporrof1=[];
	$.getJSON('http://data.agrotikianaptixi.gr/myindex.php/aporrofisi', function(mydata) {
		aporrof1.push(mydata[0]);
		pliromes_gen=aporrof1[0]['pliromes'];
		dikaiouxoi_gen=aporrof1[0]['dikaiouxoi_gen'];
		ektaria_gen=aporrof1[0]['ektaria_gen'];
		katartisi=aporrof1[0]['katartisi'];
		neoi_gen=aporrof1[0]['neoi_gen'];
		evriz=aporrof1[0]['evriz'];
		dimosia=aporrof1[0]['dimosia'];
		document.getElementById("pliromes_gen").innerHTML=pliromes_gen;
		document.getElementById("dikaiouxoi_gen").innerHTML=dikaiouxoi_gen;
		document.getElementById("ektaria_gen").innerHTML=ektaria_gen;
		document.getElementById("katartisi").innerHTML=katartisi;
		document.getElementById("neoi_gen").innerHTML=neoi_gen;
		document.getElementById("evriz").innerHTML=evriz;
		document.getElementById("dimosia").innerHTML=dimosia;
	});
};
function eu(language){
	d3.select("#eu").selectAll("svg").remove();
	var margineu = {top: 40, right: 10, bottom: 40, left: 30},
		widtheu = 600 - margineu.left - margineu.right,
		heighteu = 450 - margineu.top - margineu.bottom;
	var formatPercent = d3.format(".0%");
	var x_eu = d3.scale.ordinal()
		.rangeRoundBands([0, widtheu], .1);
	var y_eu = d3.scale.linear()
		.range([heighteu, 0]);
	var xAxiseu = d3.svg.axis()
		.scale(x_eu)
		.orient("bottom");
	var yAxiseu = d3.svg.axis()
		.scale(y_eu)
		.orient("left")
		.tickFormat(formatPercent);
	var svg_eu = d3.select("#eu").append("svg")
		.attr("width", widtheu + margineu.left + margineu.right)
		.attr("height", heighteu + margineu.top + margineu.bottom)
		.call(responsivefy)
		.append("g")
		.attr("transform", "translate(" + margineu.left + "," + margineu.top + ")");
	d3.json('http://data.agrotikianaptixi.gr/myindex.php/eu', function(error, mydata) {
		var sortByProperty = function (property, order) {
			return function (x, y) {
				if (order=='asc'){return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
				} else if (order=='desc') {return ((x[property] === y[property]) ? 0 : ((x[property] < y[property]) ? 1 : -1));
				};
			};
		};
		mydata=mydata.sort(sortByProperty("pct","asc"));
		var eu_data=[];
		eu_data=mydata;
		x_eu.domain(eu_data.map(function(d) { return d.letter; }));
		y_eu.domain([0, d3.max(eu_data, function(d) { return d.pct; })]);
		svg_eu.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + heighteu + ")")
			.style("font-size", "100%") 
			.call(xAxiseu);
		if (language=='el-GR'){
			svg_eu.append("g")
				.attr("class", "y axis")
				.call(yAxiseu)
				.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.text("Απορρόφηση (%)");
			svg_eu.append("text")
				.attr("x", (widtheu / 2))             
				.attr("y", 0 - (margineu.top / 2))
				.attr("text-anchor", "middle")  
				.style("font-size", "110%") 
				.style("font-weight", "bold")
				.style("fill", "#35a745")  
				.text("Ποσοστό απορρόφησης ΠΑΑ στην Ε.Ε. (έως 31/12/2018)");
			svg_eu.append("text")
				.attr("x", (widtheu / 8))             
				.attr("y", y_eu(0.4314)-10)
				.attr("text-anchor", "middle")  
				.style("font-size", "95%")
				.style("fill", "red")
				.text("Μέσος όρος Ε.Ε.");
			svg_eu.append("text")
				.attr("x", (widtheu / 2))             
				.attr("y", heighteu+30)
				.attr("text-anchor", "middle")  
				.style("font-size", "50%") 
				.style("text-decoration", "underline")  
				.text("Πηγή: EU Open Data");
				var tip = d3.tip()
					.attr('class', 'd3-tip')
					.offset([-10, 0])
					.html(function(d) {
					return "<span style='color:white'>" + d.fullname + ": " + Number((d.pct*100)).toFixed(2) + "%</span>";
				});
				svg_eu.call(tip);
		} else {
			svg_eu.append("g")
				.attr("class", "y axis")
				.call(yAxiseu)
				.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.text("Financial Execution (%)");
			svg_eu.append("text")
				.attr("x", (widtheu / 2))             
				.attr("y", 0 - (margineu.top / 2))
				.attr("text-anchor", "middle")  
				.style("font-size", "110%") 
				.style("font-weight", "bold")
				.style("fill", "#35a745")  
				.text("RDP financial execution in EU (% RDP funds till 31/12/2018)");
			svg_eu.append("text")
				.attr("x", (widtheu / 8))             
				.attr("y", y_eu(0.4223)-10)
				.attr("text-anchor", "middle")  
				.style("font-size", "95%")
				.style("fill", "red")
				.text("EU average");
			svg_eu.append("text")
				.attr("x", (widtheu / 2))             
				.attr("y", heighteu+30)
				.attr("text-anchor", "middle")  
				.style("font-size", "50%") 
				.style("text-decoration", "underline")  
				.text("Source: EU Open Data");
			var tip = d3.tip()
				.attr('class', 'd3-tip')
				.offset([-10, 0])
				.html(function(d) {
				return "<span style='color:white'>" + d.fullname_en + ": " + Number((d.pct*100)).toFixed(2) + "%</span>";
			});
			svg_eu.call(tip);
		}
		svg_eu.selectAll(".mybar")
			.data(eu_data)
			.enter().append("rect")
			.attr("class", "mybar")
			.attr("x", function(d) { return x_eu(d.letter); })
			.attr("width", x_eu.rangeBand())
			.attr("y", function(d) { return y_eu(d.pct); })
			.attr("fill", function(d) {
			if (d.letter =="GR") {
				return "green";
			} 
				return "orange";
			})
			.attr("height", function(d) { return heighteu - y_eu(d.pct); })
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);
		svg_eu.append("line")
			.style("stroke", "red")
			.style("stroke-width", "2")
			.attr("x1", 0)
			.attr("y1", y_eu(0.4223))
			.attr("x2", widtheu)
			.attr("y2", y_eu(0.4223));
		});
};
function eupayments(language){
	d3.select("#eupayments").selectAll("svg").remove();
	var margineupayments = {top: 40, right: 10, bottom: 40, left: 30},
		widtheupayments = 600 - margineupayments.left - margineupayments.right,
		heighteupayments = 450 - margineupayments.top - margineupayments.bottom;
	var formatPercent = d3.format(".0%");
	var x_eupayments = d3.scale.ordinal()
		.rangeRoundBands([0, widtheupayments], .1);
	var y_eupayments = d3.scale.linear()
		.range([heighteupayments, 0]);
	var xAxiseupayments = d3.svg.axis()
		.scale(x_eupayments)
		.orient("bottom");
	var yAxiseupayments = d3.svg.axis()
		.scale(y_eupayments)
		.orient("left");
	var svg_eupayments = d3.select("#eupayments").append("svg")
		.attr("width", widtheupayments + margineupayments.left + margineupayments.right)
		.attr("height", heighteupayments + margineupayments.top + margineupayments.bottom)
		.call(responsivefy)
		.append("g")
		.attr("transform", "translate(" + margineupayments.left + "," + margineupayments.top + ")");
	d3.json('http://data.agrotikianaptixi.gr/myindex.php/eu', function(error, mydata) {
		var sortByProperty = function (property, order) {
			return function (x, y) {
				if (order=='asc'){return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
				} else if (order=='desc') {return ((x[property] === y[property]) ? 0 : ((x[property] < y[property]) ? 1 : -1));
				};
			};
		};
		mydata=mydata.sort(sortByProperty("payments","asc"));
		var eu_datapayments=[];
		eu_datapayments=mydata;
		x_eupayments.domain(eu_datapayments.map(function(d) { return d.letter; }));
		y_eupayments.domain([0, d3.max(eu_datapayments, function(d) { return d.payments; })]);
		svg_eupayments.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + heighteupayments + ")")
			.call(xAxiseupayments);
		if (language=='el-GR'){
			svg_eupayments.append("g")
				.attr("class", "y axis")
				.call(yAxiseupayments)
				.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.text("Πληρωμές (δις €)");
			svg_eupayments.append("text")
				.attr("x", (widtheupayments / 2))             
				.attr("y", 0 - (margineupayments.top / 2))
				.attr("text-anchor", "middle")  
				.style("font-size", "110%") 
				.style("font-weight", "bold")
				.style("fill", "#35a745")  
				.text("Πληρωμές Ε.Ε. προς κ-μ για ΠΑΑ (δις € έως 31/12/2018)");
			svg_eupayments.append("text")
				.attr("x", (widtheupayments / 8))             
				.attr("y", y_eupayments(1.54)-10)
				.attr("text-anchor", "middle")  
				.style("font-size", "95%")
				.style("fill", "red")
				.text("Μέσος όρος Ε.Ε.");
			svg_eupayments.append("text")
				.attr("x", (widtheupayments / 2))             
				.attr("y", heighteupayments+30)
				.attr("text-anchor", "middle")  
				.style("font-size", "50%") 
				.style("text-decoration", "underline")  
				.text("Πηγή: EU Open Data");
				var tippayments = d3.tip()
					.attr('class', 'd3-tip')
					.offset([-10, 0])
					.html(function(d) {
					return "<span style='color:white'>" + d.fullname + ": " + Number((d.payments)).toFixed(2) + "δις €</span>";
				});
				svg_eupayments.call(tippayments);
		} else {
			svg_eupayments.append("g")
				.attr("class", "y axis")
				.call(yAxiseupayments)
				.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.text("Payments (bn €)");
			svg_eupayments.append("text")
				.attr("x", (widtheupayments / 2))             
				.attr("y", 0 - (margineupayments.top / 2))
				.attr("text-anchor", "middle")  
				.style("font-size", "110%") 
				.style("font-weight", "bold")
				.style("fill", "#35a745")  
				.text("EU payments to m-s for RDP (billions € till 31/12/2018)");
			svg_eupayments.append("text")
				.attr("x", (widtheupayments / 8))             
				.attr("y", y_eupayments(1.54)-10)
				.attr("text-anchor", "middle")  
				.style("font-size", "95%")
				.style("fill", "red")
				.text("EU average");
			svg_eupayments.append("text")
				.attr("x", (widtheupayments / 2))             
				.attr("y", heighteupayments+30)
				.attr("text-anchor", "middle")  
				.style("font-size", "50%") 
				.style("text-decoration", "underline")  
				.text("Source: EU Open Data");
			var tippayments = d3.tip()
				.attr('class', 'd3-tip')
				.offset([-10, 0])
				.html(function(d) {
				return "<span style='color:white'>" + d.fullname_en + ": " + Number((d.payments)).toFixed(2) + "bn €</span>";
			});
			svg_eupayments.call(tippayments);
		}
		svg_eupayments.selectAll(".mybar")
			.data(eu_datapayments)
			.enter().append("rect")
			.attr("class", "mybar")
			.attr("x", function(d) { return x_eupayments(d.letter); })
			.attr("width", x_eupayments.rangeBand())
			.attr("y", function(d) { return y_eupayments(d.payments); })
			.attr("fill", function(d) {
			if (d.letter =="GR") {
				return "green";
			} 
				return "orange";
			})
			.attr("height", function(d) { return heighteupayments - y_eupayments(d.payments); })
			.on('mouseover', tippayments.show)
			.on('mouseout', tippayments.hide);
		svg_eupayments.append("line")
			.style("stroke", "red")
			.style("stroke-width", "2")
			.attr("x1", 0)
			.attr("y1", y_eupayments(1.54))
			.attr("x2", widtheupayments)
			.attr("y2", y_eupayments(1.54));
		});
};
function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    var CSV = 'sep=,' + '\r\n\n';
    if (ShowLabel) {
        var row = "";
        for (var index in arrData[0]) {
            row += index + ',';
        }
        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }
    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    var fileName = "MyReport_";
    fileName += ReportTitle.replace(/ /g,"_");   
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");    
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function mymylines(){
	d3.json('http://data.agrotikianaptixi.gr/myindex.php/poreiapaa', function(error, data) {
		parseDate = d3.time.format("%Y-%m-%d").parse;
		data.forEach(function (d) {
			d.date = parseDate(d.date);
			d.Dimosia = +d.Dimosia;
			d.Enosiaki = +d.Enosiaki;
		});
		var chart = makeLineChart(data, 'date', {
			'Δημόσια Δαπάνη': {column: 'Dimosia'},
			'Ενωσιακή Συμμετοχή': {column: 'Enosiaki'}
		}, {xAxis: 'Έτος', yAxis: 'Ποσό (εκατ. €)'});
		chart.bind("#chart-line1");
		chart.render();
	});
	function makeLineChart(dataset, xName, yObjs, axisLables) {
		var chartObj = {};
		var color = d3.scale.category10();
		chartObj.xAxisLable = axisLables.xAxis;
		chartObj.yAxisLable = axisLables.yAxis;
		/*
		 yObjsects format:
		 {y1:{column:'',name:'name',color:'color'},y2}
		 */
		chartObj.data = dataset;
		chartObj.margin = {top: 15, right: 60, bottom: 20, left: 100};
		chartObj.width = 850 - chartObj.margin.left - chartObj.margin.right;
		chartObj.height = 800 - chartObj.margin.top - chartObj.margin.bottom;
	// So we can pass the x and y as strings when creating the function
		parseDate = d3.time.format("%Y-%m-%d").parse;
		chartObj.xFunct = function(d){console.log(d[xName]);return d[xName]};
	// For each yObjs argument, create a yFunction
		function getYFn(column) {
			return function (d) {
				return d[column];
			};
		}
	// Object instead of array
		chartObj.yFuncts = [];
		for (var y  in yObjs) {
			yObjs[y].name = y;
			yObjs[y].yFunct = getYFn(yObjs[y].column); //Need this list for the ymax function
			chartObj.yFuncts.push(yObjs[y].yFunct);
		}
	// Formatter functions for the axes
		chartObj.formatAsNumber = d3.format(".0f");
		chartObj.formatAsDecimal = d3.format(".2f");
		chartObj.formatAsCurrency = d3.format("$.2f");
		chartObj.formatAsDate = d3.time.format("%d-%m-%Y").parse;
		chartObj.formatAsFloat = function (d) {
			if (d % 1 !== 0) {
				return d3.format(".2f")(d);
			} else {
				return d3.format(".0f")(d);
			}
		};
		chartObj.xFormatter = chartObj.formatAsDate;
		chartObj.yFormatter = chartObj.formatAsFloat;
		chartObj.bisectYear = d3.bisector(chartObj.xFunct).left; //< Can be overridden in definition
	// Create scale functions
		chartObj.xScale = d3.scale.linear().range([0, chartObj.width]).domain(d3.extent(chartObj.data, chartObj.xFunct)); //< Can be overridden in definition
	// Get the max of every yFunct
		chartObj.max = function (fn) {
			return d3.max(chartObj.data, fn);
		};
		chartObj.yScale = d3.scale.linear().range([chartObj.height, 0]).domain([0, d3.max(chartObj.yFuncts.map(chartObj.max))]);
		chartObj.formatAsYear = d3.format("");
	// Create axis
		chartObj.xAxis = d3.svg.axis().scale(chartObj.xScale).orient("bottom").tickFormat(chartObj.xFormatter); //< Can be overridden in definition
		chartObj.yAxis = d3.svg.axis().scale(chartObj.yScale).orient("left").tickFormat(chartObj.yFormatter); //< Can be overridden in definition
	// Build line building functions
		function getYScaleFn(yObj) {
			return function (d) {
				return chartObj.yScale(yObjs[yObj].yFunct(d));
			};
		}
		for (var yObj in yObjs) {
			yObjs[yObj].line = d3.svg.line().interpolate("cardinal").x(function (d) {
				return chartObj.xScale(chartObj.xFunct(d));
			}).y(getYScaleFn(yObj));
		}
		chartObj.svg;
	// Change chart size according to window size
		chartObj.update_svg_size = function () {
			chartObj.width = parseInt(chartObj.chartDiv.style("width"), 10) - (chartObj.margin.left + chartObj.margin.right);
			chartObj.height = parseInt(chartObj.chartDiv.style("height"), 10) - (chartObj.margin.top + chartObj.margin.bottom);

			/* Update the range of the scale with new width/height */
			chartObj.xScale.range([0, chartObj.width]);
			chartObj.yScale.range([chartObj.height, 0]);

			if (!chartObj.svg) {return false;}

			/* Else Update the axis with the new scale */
			chartObj.svg.select('.x.axis').attr("transform", "translate(0," + chartObj.height + ")").call(chartObj.xAxis);
			chartObj.svg.select('.x.axis .label').attr("x", chartObj.width / 2);

			chartObj.svg.select('.y.axis').call(chartObj.yAxis);
			chartObj.svg.select('.y.axis .label').attr("x", -chartObj.height / 2);

			/* Force D3 to recalculate and update the line */
			for (var y  in yObjs) {
				yObjs[y].path.attr("d", yObjs[y].line);
			}
			d3.selectAll(".focus.line").attr("y2", chartObj.height);
			chartObj.chartDiv.select('svg').attr("width", chartObj.width + (chartObj.margin.left + chartObj.margin.right)).attr("height", chartObj.height + (chartObj.margin.top + chartObj.margin.bottom));
			chartObj.svg.select(".overlay").attr("width", chartObj.width).attr("height", chartObj.height);
			return chartObj;
		};
		chartObj.bind = function (selector) {
			chartObj.mainDiv = d3.select(selector);
			// Add all the divs to make it centered and responsive
			chartObj.mainDiv.append("div").attr("class", "inner-wrapper").append("div").attr("class", "outer-box").append("div").attr("class", "inner-box");
			chartSelector = selector + " .inner-box";
			chartObj.chartDiv = d3.select(chartSelector);
			d3.select(window).on('resize.' + chartSelector, chartObj.update_svg_size);
			chartObj.update_svg_size();
			return chartObj;
		};
	// Render the chart
		chartObj.render = function () {
			//Create SVG element
			chartObj.svg = chartObj.chartDiv.append("svg").attr("class", "chart-area").attr("width", chartObj.width + (chartObj.margin.left + chartObj.margin.right)).attr("height", chartObj.height + (chartObj.margin.top + chartObj.margin.bottom)).append("g").attr("transform", "translate(" + chartObj.margin.left + "," + chartObj.margin.top + ")");
			// Draw Lines
			for (var y  in yObjs) {
				yObjs[y].path = chartObj.svg.append("path").datum(chartObj.data).attr("class", "line").attr("d", yObjs[y].line).style("stroke", color(y)).attr("data-series", y).on("mouseover", function () {
					focus.style("display", null);
				}).on("mouseout", function () {
					focus.transition().delay(700).style("display", "none");
				}).on("mousemove", mousemove);
			};
			// Draw Axis
			chartObj.svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + chartObj.height + ")").call(chartObj.xAxis).append("text").attr("class", "label").attr("x", chartObj.width / 2).attr("y", 30).style("text-anchor", "middle").text(chartObj.xAxisLable);
			chartObj.svg.append("g").attr("class", "y axis").call(chartObj.yAxis).append("text").attr("class", "label").attr("transform", "rotate(-90)").attr("y", -42).attr("x", -chartObj.height / 2).attr("dy", ".71em").style("text-anchor", "middle").text(chartObj.yAxisLable);
			//Draw tooltips
			var focus = chartObj.svg.append("g").attr("class", "focus").style("display", "none");
			for (var y  in yObjs) {
				yObjs[y].tooltip = focus.append("g");
				yObjs[y].tooltip.append("circle").attr("r", 5);
				yObjs[y].tooltip.append("rect").attr("x", 8).attr("y","-5").attr("width",22).attr("height",'0.75em');
				yObjs[y].tooltip.append("text").attr("x", 9).attr("dy", ".35em");
			};
			// Year label
			focus.append("text").attr("class", "focus year").attr("x", 9).attr("y", 137);
			// Focus line
			focus.append("line").attr("class", "focus line").attr("y1", 0).attr("y2", chartObj.height);
			//Draw legend
			var legend = chartObj.mainDiv.append('div').attr("class", "legend");
			for (var y  in yObjs) {
				series = legend.append('div');
				series.append('div').attr("class", "series-marker").style("background-color", color(y));
				series.append('p').text(y);
				yObjs[y].legend = series;
			};
			// Overlay to capture hover
			chartObj.svg.append("rect").attr("class", "overlay").attr("width", chartObj.width).attr("height", chartObj.height).on("mouseover", function () {
				focus.style("display", null);
			}).on("mouseout", function () {
				focus.style("display", "none");
			}).on("mousemove", mousemove);
			return chartObj;
			function mousemove() {
				var x0 = chartObj.xScale.invert(d3.mouse(this)[0]), i = chartObj.bisectYear(dataset, x0, 1), d0 = chartObj.data[i - 1], d1 = chartObj.data[i];
				try {
					var d = x0 - chartObj.xFunct(d0) > chartObj.xFunct(d1) - x0 ? d1 : d0;
				} catch (e) { return;}
				minY = chartObj.height;
				for (var y  in yObjs) {
					yObjs[y].tooltip.attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + "," + chartObj.yScale(yObjs[y].yFunct(d)) + ")");
					yObjs[y].tooltip.select("text").text(chartObj.yFormatter(yObjs[y].yFunct(d)));
					minY = Math.min(minY, chartObj.yScale(yObjs[y].yFunct(d)));
				}

				focus.select(".focus.line").attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + ")").attr("y1", minY);
				focus.select(".focus.year").text("Year: " + chartObj.xFormatter(chartObj.xFunct(d)));
			}

		};
		return chartObj;
	}
};