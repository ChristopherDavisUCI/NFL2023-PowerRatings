Search.setIndex({"docnames": ["GetLines", "PowerRatings", "intro"], "filenames": ["GetLines.ipynb", "PowerRatings.ipynb", "intro.ipynb"], "titles": ["Getting point spreads from nflverse on GitHub", "NFL power ratings calculation", "Market Power Ratings"], "terms": {"thi": [0, 1, 2], "notebook": [0, 1, 2], "show": [0, 1, 2], "how": [0, 1, 2], "we": [0, 1, 2], "got": 0, "look": [0, 1, 2], "ahead": [0, 2], "valu": [0, 1, 2], "were": [0, 1, 2], "us": [0, 1, 2], "our": [0, 2], "power": 0, "rate": 0, "calcul": 0, "By": 0, "far": 0, "easiest": 0, "wai": [0, 1, 2], "i": [0, 1, 2], "know": 0, "data": [0, 1, 2], "follow": [0, 1, 2], "file": [0, 1], "game": [0, 1, 2], "csv": [0, 1, 2], "work": [0, 1, 2], "tabular": 0, "import": [0, 1, 2], "panda": [0, 1, 2], "pd": [0, 1, 2], "read": [0, 1], "directli": [0, 2], "anoth": [0, 2], "option": [0, 1], "would": [0, 1, 2], "download": 0, "local": 0, "url": 0, "http": [0, 2], "raw": 0, "githubusercont": 0, "com": 0, "nfldata": 0, "master": 0, "df_full": 0, "read_csv": [0, 1, 2], "larg": 0, "dataset": [0, 2], "mani": [0, 1, 2], "more": [0, 1, 2], "row": [0, 1, 2], "column": [0, 1, 2], "than": [0, 2], "need": [0, 2], "There": [0, 1], "ar": [0, 1, 2], "so": [0, 1, 2], "remov": [0, 1, 2], "limit": 0, "impos": 0, "number": [0, 2], "displai": [0, 1, 2], "max_column": [0, 1], "none": [0, 2], "here": [0, 1, 2], "four": [0, 1, 2], "random": 0, "datafram": [0, 1, 2], "sampl": [0, 2], "method": [0, 1, 2], "similar": [0, 2], "head": [0, 1, 2], "return": 0, "randomli": 0, "select": 0, "rather": [0, 2], "first": [0, 1, 2], "4": [0, 1, 2], "game_id": 0, "season": [0, 1, 2], "game_typ": 0, "week": 0, "gamedai": 0, "weekdai": 0, "gametim": 0, "away_team": [0, 1, 2], "away_scor": 0, "home_team": [0, 1, 2], "home_scor": 0, "locat": [0, 1], "result": [0, 1, 2], "total": [0, 2], "overtim": 0, "old_game_id": 0, "gsi": 0, "nfl_detail_id": 0, "pfr": 0, "pff": 0, "espn": 0, "away_rest": 0, "home_rest": 0, "away_moneylin": 0, "home_moneylin": 0, "spread_lin": [0, 1, 2], "away_spread_odd": 0, "home_spread_odd": 0, "total_lin": 0, "under_odd": 0, "over_odd": 0, "div_gam": 0, "roof": 0, "surfac": 0, "temp": 0, "wind": 0, "away_qb_id": 0, "home_qb_id": 0, "away_qb_nam": 0, "home_qb_nam": 0, "away_coach": 0, "home_coach": 0, "refere": 0, "stadium_id": 0, "stadium": [0, 2], "931": 0, "2002_11_car_tb": 0, "2002": 0, "reg": [0, 1, 2], "11": [0, 1], "17": [0, 1], "sundai": 0, "16": [0, 1], "05": 0, "car": [0, 1, 2], "10": [0, 1, 2], "0": [0, 1, 2], "tb": [0, 1], "23": [0, 1, 2], "home": [0, 1, 2], "13": [0, 1], "33": [0, 2], "2002111705": 0, "18248": 0, "nan": 0, "200211170tam": 0, "221117027": 0, "7": [0, 1, 2], "14": [0, 1], "8": [0, 1, 2], "34": 0, "5": [0, 1, 2], "1": [0, 1, 2], "outdoor": 0, "grass": 0, "64": 0, "20": [0, 1], "00": 0, "0012732": 0, "0008442": 0, "rodnei": 0, "peet": 0, "brad": 0, "johnson": 0, "john": 0, "fox": 0, "jon": 0, "gruden": 0, "bob": 0, "mcelwe": 0, "tam00": 0, "raymond": 0, "jame": 0, "6172": 0, "2022_03_kc_ind": 0, "2022": 0, "3": [0, 1, 2], "09": 0, "25": [0, 1], "kc": [0, 1, 2], "ind": [0, 1, 2], "37": 0, "2022092502": 0, "202209250clt": 0, "401437638": 0, "199": 0, "177": 0, "103": 0, "114": 0, "51": 0, "105": 0, "107": 0, "open": 0, "fieldturf": 0, "0033873": 0, "0026143": 0, "patrick": 0, "mahom": 0, "matt": 0, "ryan": 0, "andi": [0, 2], "reid": 0, "frank": 0, "reich": 0, "shawn": 0, "smith": 0, "ind00": 0, "luca": 0, "oil": 0, "1217": 0, "2003_12_cin_sd": 0, "2003": 0, "12": [0, 1], "15": [0, 1], "cin": [0, 1, 2], "sd": 0, "27": [0, 1], "61": 0, "2003112313": 0, "26449": 0, "200311230sdg": 0, "231123024": 0, "43": 0, "67": 0, "9": [0, 1, 2], "0009311": 0, "0005363": 0, "kitna": 0, "doug": 0, "fluti": 0, "marvin": 0, "lewi": 0, "marti": 0, "schottenheim": 0, "toni": 0, "corrent": 0, "sdg00": 0, "qualcomm": 0, "1356": 0, "2004_03_dal_wa": 0, "2004": 0, "mondai": 0, "dal": [0, 1], "21": [0, 1], "wa": [0, 1, 2], "18": [0, 1], "39": 0, "2004092700": 0, "26954": 0, "200409270wa": 0, "240927028": 0, "35": 0, "72": 0, "0016193": 0, "0002110": 0, "vinni": 0, "testaverd": 0, "mark": 0, "brunel": 0, "bill": 0, "parcel": 0, "joe": 0, "gibb": 0, "gerri": 0, "austin": 0, "was00": 0, "fedexfield": 0, "onli": [0, 1, 2], "few": [0, 1], "In": [0, 1, 2], "fact": [0, 1], "don": [0, 1, 2], "t": [0, 1, 2], "even": [0, 2], "think": [0, 1, 2], "defin": [0, 1], "list": [0, 2], "col": 0, "contain": [0, 1, 2], "name": [0, 1, 2], "also": [0, 1, 2], "restrict": 0, "2023": [0, 1, 2], "The": [0, 1, 2], "sai": [0, 2], "want": [0, 1, 2], "which": [0, 2], "df": [0, 1, 2], "loc": 0, "ha": [0, 2], "272": [0, 2], "one": [0, 1, 2], "each": [0, 1, 2], "regular": [0, 1, 2], "shape": [0, 1, 2], "can": [0, 2], "see": [0, 1, 2], "much": [0, 2], "modest": 0, "what": [0, 1, 2], "6481": 0, "ne": [0, 1], "6653": 0, "ten": [0, 1], "sea": [0, 1], "2": [0, 1, 2], "6690": 0, "sf": [0, 1], "la": [0, 1, 2], "6637": 0, "NO": [0, 1], "nyg": [0, 1], "might": [0, 2], "seem": [0, 1, 2], "pointless": 0, "doe": [0, 1, 2], "some": [0, 1], "inform": [0, 2], "tell": [0, 1], "267": [0, 1], "neutral": [0, 1, 2], "remain": [0, 2], "value_count": [0, 1], "count": [0, 1], "dtype": [0, 1, 2], "int64": [0, 1, 2], "approach": 0, "sub": 0, "syntax": [0, 2], "where": [0, 1, 2], "someth": [0, 2], "boolean": [0, 2], "true": [0, 2], "fals": [0, 1, 2], "veri": [0, 2], "conveni": [0, 1], "call": [0, 2], "index": [0, 1, 2], "6470": 0, "jax": [0, 1, 2], "atl": [0, 1, 2], "6486": 0, "buf": [0, 1], "6500": 0, "bal": [0, 1, 2], "6544": 0, "mia": [0, 1, 2], "6558": 0, "It": [0, 2], "have": [0, 1, 2], "repres": [0, 2], "differ": 0, "creat": [0, 1], "new": [0, 1, 2], "otherwis": 0, "an": [0, 1, 2], "exampl": [0, 1], "newli": [0, 1], "ad": [0, 1], "high": 0, "like": [0, 1, 2], "6468": 0, "left": [0, 2], "hand": 0, "side": 0, "refer": 0, "origin": [0, 2], "full": [0, 2], "won": [0, 2], "them": [0, 2], "anyth": [0, 2], "If": [0, 2], "you": [0, 1, 2], "instead": [0, 2], "271": 0, "could": 0, "reset_index": [0, 1], "drop": [0, 1], "bother": [0, 2], "becaus": [0, 1, 2], "when": [0, 2], "save": 0, "anywai": [0, 1, 2], "6472": 0, "6469": 0, "gb": [0, 1], "det": [0, 1, 2], "6471": 0, "min": [0, 1], "let": [0, 2], "s": [0, 2], "rid": 0, "old": 0, "axi": [0, 1, 2], "term": [0, 1, 2], "df_new": 0, "ll": [0, 2], "includ": [0, 1, 2], "todai": 0, "date": 0, "just": [0, 1, 2], "case": [0, 2], "access": 0, "multipl": 0, "version": [0, 2], "later": [0, 2], "time": [0, 2], "strftime": 0, "y": [0, 1, 2], "m": [0, 2], "d": [0, 2], "f": 0, "string": 0, "python": [0, 1, 2], "enabl": 0, "variabl": [0, 2], "part": [0, 2], "written": 0, "filepath": 0, "08": [0, 1, 2], "sinc": [0, 1], "those": [0, 2], "argument": 0, "to_csv": 0, "filenam": 0, "getlin": 1, "all": [1, 2], "team": [1, 2], "hfa": [1, 2], "spread": [1, 2], "6": [1, 2], "hou": [1, 2], "cle": [1, 2], "comput": [1, 2], "should": [1, 2], "familiar": 1, "from": [1, 2], "introduct": 1, "home_dummi": 1, "get_dummi": [1, 2], "int": [1, 2], "away_dummi": 1, "coef": [1, 2], "notic": [1, 2], "most": [1, 2], "entri": [1, 2], "spars": 1, "matrix": 1, "although": 1, "ever": 1, "take": 1, "advantag": [1, 2], "correspond": [1, 2], "awai": 1, "haven": 1, "field": [1, 2], "yet": [1, 2], "For": [1, 2], "top": [1, 2], "ari": 1, "chi": 1, "den": 1, "lac": 1, "lv": [1, 2], "nyj": 1, "phi": 1, "pit": 1, "again": [1, 2], "factor": 1, "almost": [1, 2], "except": 1, "being": [1, 2], "plai": [1, 2], "astyp": [1, 2], "realiti": 1, "check": 1, "32": [1, 2], "plu": 1, "nfc": 1, "road": 1, "involv": 1, "arizona": 1, "255": 1, "five": [1, 2], "best": [1, 2], "mean": [1, 2], "squar": [1, 2], "error": [1, 2], "given": 1, "main": 1, "tool": 1, "linearregress": [1, 2], "class": [1, 2], "scikit": [1, 2], "learn": [1, 2], "sklearn": [1, 2], "linear_model": [1, 2], "instanc": 1, "instanti": 1, "object": [1, 2], "specifi": [1, 2], "fit_intercept": [1, 2], "allow": [1, 2], "addit": [1, 2], "constant": [1, 2], "context": [1, 2], "hard": 1, "done": [1, 2], "fit": [1, 2], "input": [1, 2], "desir": [1, 2], "output": [1, 2], "jupyt": [1, 2], "environ": [1, 2], "pleas": [1, 2], "rerun": [1, 2], "cell": [1, 2], "html": [1, 2], "represent": [1, 2], "trust": [1, 2], "On": [1, 2], "github": [1, 2], "unabl": [1, 2], "render": [1, 2], "try": [1, 2], "load": [1, 2], "page": [1, 2], "nbviewer": [1, 2], "org": [1, 2], "linearregressionlinearregress": [1, 2], "As": [1, 2], "store": [1, 2], "coef_": [1, 2], "attribut": 1, "put": 1, "togeth": 1, "seri": 1, "both": [1, 2], "numer": [1, 2], "well": 1, "ser": 1, "515579": 1, "205334": 1, "118708": 1, "444309": 1, "865624": 1, "913665": 1, "594643": 1, "658812": 1, "862485": 1, "551433": 1, "972427": 1, "632132": 1, "681461": 1, "112030": 1, "955583": 1, "732833": 1, "751637": 1, "296995": 1, "598324": 1, "473332": 1, "122250": 1, "428057": 1, "541405": 1, "725707": 1, "380826": 1, "488439": 1, "070543": 1, "598628": 1, "343375": 1, "058167": 1, "737334": 1, "899165": 1, "486125": 1, "float64": 1, "quick": 1, "librari": [1, 2], "altair": 1, "alt": 1, "turn": [1, 2], "two": 1, "other": 1, "pr": [1, 2], "re": [1, 2], "ani": [1, 2], "format": 1, "expect": 1, "do": [1, 2], "next": 1, "littl": [1, 2], "strang": 1, "df_pr": 1, "renam": 1, "19": 1, "22": 1, "24": 1, "26": 1, "28": 1, "29": 1, "30": [1, 2], "31": 1, "make": [1, 2], "bar": 1, "chart": 1, "go": [1, 2], "along": [1, 2], "x": 1, "determin": [1, 2], "height": 1, "custom": 1, "chang": 1, "default": 1, "color": 1, "scheme": 1, "tealblu": 1, "mark_bar": 1, "encod": 1, "scale": 1, "sort": 1, "biggest": 1, "smallest": 1, "add": [1, 2], "tooltip": 1, "hover": 1, "your": [1, 2], "mous": 1, "over": [1, 2], "indic": 1, "jump": 2, "straight": 2, "without": 2, "explan": 2, "background": 2, "heard": 2, "about": 2, "excel": 2, "deep": 2, "dive": 2, "podcast": 2, "episod": 2, "345": 2, "molitor": 2, "drew": 2, "dinsick": 2, "short": 2, "nine": 2, "second": 2, "clip": 2, "actual": 2, "thei": 2, "discuss": 2, "start": 2, "around": 2, "fifteen": 2, "minut": 2, "video": 2, "fb": 2, "watch": 2, "68iadii": 2, "2k": 2, "stand": 2, "estim": 2, "buffalo": 2, "philadelphia": 2, "suggest": 2, "0s": 2, "below": 2, "relat": 2, "precis": 2, "issu": 2, "round": 2, "deeper": 2, "488": 2, "444": 2, "486": 2, "5300000000000005": 2, "sourc": 2, "august": 2, "10th": 2, "similarli": 2, "kansa": 2, "citi": 2, "while": 2, "733": 2, "7749999999999995": 2, "predict": 2, "alwai": 2, "too": 2, "low": 2, "cincinnati": 2, "higher": 2, "current": 2, "line": 2, "595": 2, "6239999999999997": 2, "easi": 2, "did": 2, "three": 2, "abov": 2, "goal": 2, "opposit": 2, "direct": 2, "deriv": 2, "avail": 2, "me": 2, "explicitli": 2, "equat": 2, "get": 2, "point": 2, "made": 2, "nflvers": 2, "spreadsheet": 2, "style": 2, "convent": 2, "eventu": 2, "solv": 2, "text": 2, "begin": 2, "align": 2, "detroit": 2, "atlanta": 2, "carolina": 2, "baltimor": 2, "houston": 2, "cleveland": 2, "cdot": 2, "end": 2, "right": 2, "exactli": 2, "imposs": 2, "why": 2, "perfectli": 2, "find": 2, "come": 2, "closest": 2, "between": 2, "averag": 2, "small": 2, "possibl": 2, "That": 2, "sometim": 2, "least": 2, "reason": 2, "choic": 2, "demand": 2, "absolut": 2, "posit": 2, "neg": 2, "cancel": 2, "out": 2, "focu": 2, "vega": 2, "miami": 2, "ve": 2, "chosen": 2, "against": 2, "frankfurt": 2, "germani": 2, "schedul": 2, "worri": 2, "understand": 2, "length": 2, "df3": 2, "isin": 2, "among": 2, "123": 2, "157": 2, "etc": 2, "176": 2, "237": 2, "alignat": 2, "perfect": 2, "solut": 2, "subtract": 2, "fourth": 2, "incompat": 2, "taken": 2, "cours": 2, "algebra": 2, "augment": 2, "inconsist": 2, "arrai": 2, "cccc": 2, "c": 2, "Be": 2, "sure": 2, "vertic": 2, "abl": 2, "1s": 2, "continu": 2, "respect": 2, "bring": 2, "back": 2, "portion": 2, "common": 2, "procedur": 2, "its": 2, "own": 2, "function": 2, "machin": 2, "onehotencod": 2, "esssenti": 2, "alreadi": 2, "view": 2, "explicit": 2, "type": 2, "integ": 2, "same": 2, "negat": 2, "construct": 2, "coefs_pr": 2, "doesn": 2, "now": 2, "relev": 2, "bool": 2, "essenti": 2, "revers": 2, "natur": 2, "And": 2, "convert": 2, "produc": 2, "assign": 2, "copi": 2, "section": 2, "easier": 2, "code": 2, "previou": 2, "though": 2, "math": 2, "occur": 2, "sophist": 2, "book": 2, "keep": 2, "rememb": 2, "saw": 2, "caution": 2, "thing": 2, "r": 2, "complain": 2, "uniqu": 2, "everi": 2, "project": 2, "unchang": 2, "One": 2, "effect": 2, "forc": 2, "probabl": 2, "good": 2, "orient": 2, "program": 2, "typic": 2, "found": 2, "b": 2, "mx": 2, "recal": 2, "featur": 2, "predictor": 2, "target": 2, "At": 2, "clear": 2, "happen": 2, "attach": 2, "52777778": 2, "38888889": 2, "13888889": 2, "91666667": 2, "order": 2, "feature_names_in_": 2, "Of": 2, "53": 2, "mayb": 2, "realist": 2, "mention": 2, "pretti": 2, "accur": 2, "consid": 2, "recent": 2, "went": 2, "depth": 2, "topic": 2, "573": 2, "youtub": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"get": 0, "point": 0, "spread": 0, "from": 0, "nflvers": 0, "github": 0, "nfl": 1, "power": [1, 2], "rate": [1, 2], "calcul": 1, "set": 1, "up": 1, "272": 1, "equat": 1, "33": 1, "variabl": 1, "find": 1, "closest": 1, "solut": 1, "visual": 1, "market": 2, "introduct": 2, "exampl": 2, "system": 2, "creat": 2, "coeffici": 2, "matrix": 2, "perform": 2, "linear": 2, "regress": 2}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})