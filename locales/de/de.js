export default {
  sidebar: {
    dashboard: 'Dashboard',
    possibleBuys: 'Mögliche Käufe',
    positions: 'Positionen',
    pairs: 'Paare',
    dca: 'DCA',
    pending: 'Ausstehend',
    dust: 'Dust',
    reserved: 'Reserviert',
    reversal: 'Umkehrung', ( sounds a bit weird in german )
    buys: 'Käufe',
    sales: 'Verkäufe',
    stats: 'Statistiken',
    accountSettings: 'Account Einstellungen',
    activeConfig: 'Aktive Konfiguration',
    otherConfig: 'Andere Konfiguration',
    ptfConfig: 'Konfig',
    systemLogs: 'Systemprotokolle',
    headers: {
      logs: 'Protokolle',
      configuration: 'Konfiguration',
      ptFeeder: 'PTFeeder',
      misc: 'Sonstiges.'
    }
  },
  header: {
    sidebar: 'Seitenleiste umschalten',
    profit: 'Gewinn',
    t: 'T',
    lw: 'LW',
    yd: 'YD',
    td: 'TD',
    fullscreen: 'Vollbild',
    news: 'Nachrichten',
    notifications: 'Benachrichtigung',
    noNotifications: 'Es gibt keine Benachrichtigungen',
    subscriptions: 'Abonnements',
    noSubscriptions: 'Es gibt keine Produkte auf der Liste',
    renew: 'Erneuern',
    shorting: 'Shorting', not sure how to translate that
    moreWarnings: 'Es können weitere Warnungen oder Fehler auftreten. Überprüfen Sie das Klingelsymbol über dieser Nachricht.',

    settings: 'Einstellungen'
  },
  footer: {
    up: 'Nach oben',
    wiki: 'Wiki',
    support: 'Unterstützung',
    shop: 'Shop',
    som: 'SOM',
    somText: 'Schalten Sie nur Verkaufen Modus ein oder aus',
    changePw: 'Passwort ändern',
    logOut: 'Abmelden von',
    reset: '{pt} Daten zurücksetzen',
    resetTitle: 'ProfitTrailer zurücksetzen',
    resetText: 'Dadurch werden alle Daten im ProfitTrailer zurückgesetzt. Wollen Sie wirklich fortfahren?',
    resetFinish: 'ProfitTrailer setzt Ihre Daten zurück',
    stop: 'Stop',
    stopTitle: 'Stop ProfitTrailer',
    stopText: 'Sind Sie sicher, dass Sie ProfitTrailer abschalten wollen?',
    stopFinish: 'ProfitTrailer schaltet sich ab.',
    somToastr: 'Sell Only Mode is turned {value}', not sure how to translate that
    on: 'Ein',
    off: 'Aus',
    trading: 'Handel',
    tradingAbbrv: 'T',
    tradingText: 'Deaktivieren / Aktivieren des globalen Handels',
    tradingToastr: 'Global Trading is turned {value}' not sure how to translate that
  },
  config: {
    search: 'Suche',
    save: 'Speichern',
    download: 'Konfigurationsdateien herunterladen',
    downloadLogs: 'Protokolle herunterladen',
    downloadFeeder: 'Feeder Konfig Dateien herunterladen',
    downloadFeederLog: 'Feeder Log herunterladen',
    delete: 'Konfig löschen',
    rename: 'Konfig umbenennen',
    copy: 'Konfig kopieren',
    nothingNew: 'Nichts Neues zu Speichern',
    leavingSure: 'Möchten Sie die Seite wirklich verlassen? Sie haben ungespeicherte Änderungen!',
    notSaved: 'Nicht gespeichert',
    noAccessConfig: 'Sie haben keinen Zugriff auf die Konfiguration',
    publish: 'Aktive Konfiguration veröffentlichen', ive never seen a publish button?
    invalidProperties: 'Sie haben ungültige Eigenschaften in Ihrer Konfiguration',
    in: 'In {tab}:'
  },
  generics: {
    paperShort: '(p)',
    paper: 'Papier',
    true: 'Richtig',
    false: 'Falsch',
    enabled: 'Aktiviert',
    disabled: 'Ausgeschaltet',
    noRights: 'Sie haben nicht die Rechte, diesen Knopf zu benutzen', Knopf Sounds Weird i would keep Button here
    viewAll: 'Alle anzeigen',
    showAllNews: 'Alle News anzeigen',
    postedOn: 'Veröffentlicht am',
    daysAgo: '{Tag} vor einem Tag | {Tage} vor Tagen',
    dayAgo: '{Tage} T,
    balance: 'Guthaben',
    pairsBalance: 'Paare Guthaben',
    dcaBalance: 'DCA Guthaben',
    reversalBalance: 'Umkehr Guthaben', Still weird in german
    tcv: 'TCV',
    totalCurrentValue: 'Gesamtgegenwartswert',
    profitToday: 'Profit heute',
    profitYesterday: 'Gewinn gestern',
    profitLastWeek: 'Gewinn der letzten 7 Tage',
    allTimeProfit: 'Gewinn Gesamt Zeit',
    estimatedGain: 'Geschätzter Gewinn',
    profit: 'Gewinn',
    funding: 'Finanzierung',
    currentPositions: 'Aktuelle Positionen',
    tab: 'Tab',
    value: 'Wert',
    cost: 'Kosten',
    diff: 'Unterschied',
    asc: 'Aufsteigend',
    desc: 'Absteigend',
    tableFilters: 'Tabellenfilter',
    dropdownTableOptions: 'Tabelleneinstellungen',
    saveFilters: 'Filter speichern',
    name: 'Name',
    difference: 'Unterschied',
    totalRecords: 'Total Records',
    first: 'Zuerst',
    last: 'Zuletzt',
    next: 'Weiter',
    prev: 'Vorherige',
    noAccessLicense: 'Sie haben mit Ihrer aktuellen Lizenz keinen Zugriff darauf.',
    type: 'Art',
    buyHistoryDownload: 'Die Kaufhistorie wird zum Download vorbereitet.',
    sellHistoryDownload: 'Verkaufen Geschichte wird zum Download vorbereitet.'
  },
  stats: {
    coinSpecific: 'Coin spezifisch', Coin is called Münz but thats a very old word and since its crypto everyone says Coin
    generalStats: 'Allgemeine Statistik',
    asTables: 'Als Tabellen anzeigen',
    generating: 'Generieren von Statistiken Seite',
    dailyProfits: 'Tägliche Gewinne',
    monthlyProfits: 'Monatsgewinne',
    dailyStats: 'Tägliche Statistiken',
    totalBuys: 'Käufe insgesamt',
    totalBoughtCost: 'Gekaufte Gesamtkosten',
    totalSells: 'Gesamtverkäufe',
    totalSellValue: 'Gesamtverkaufswert',
    totalProfits: 'Gesamtgewinn',
    viewMoreStats: 'Mehr Statistiken anzeigen',
    statsUpgrade: 'Sie haben eine eingeschränkte Sicht auf Statistiken. Bitte aktualisieren Sie auf Advanced , um Zugriff auf mehr Statistiken zu erhalten:',
    shop: 'Shop',
    monthlyStats: 'Monatliche Statistiken',
    salesDistribution: 'Umsatzverteilung',
    mostProfitablePairs: 'Die profitabelsten Paare',
    leastProfitablePairs: 'Am wenigsten rentable Paare',
    mostSoldPairs: 'Meist verkaufte Paare',
    sellDcaCount: 'Sell DCA Count', not sure how to translate that
    totalCurrentValue: 'Gesamtgegenwartswert',
    salesDistributionAbbr: 'Verkaufsverteilung Abkürzungen',
    salesDistributionAbbrText: 'TP = Take Profit <br> TPS = Take Profit Safety <br> TSL = Trailing Stop Loss <br>M = Manual<br>MP = Max Profit<br>G = Gain',
    timesSold: 'Times Sold',
    dcaLevel: 'DCA Level',
    pairsSold: 'Verkaufte Paare',
    avgTradeDuration: 'Durchschnittliche Handelsdauer (Stunden) ',
    avgProfit: 'Durchschnittsgewinne',
    mostSold: 'Meist verkauft',
    dSpentVsEarned: 'Täglich: Ausgegeben vs. verdient',
    mSpentVsEarned: 'Monatlich: Ausgaben vs. Verdient',
    dBuyVsSales: 'Täglich: Käufe vs Verkäufe',
    mBuyVsSales: 'Monatlich: Käufe vs Verkäufe',
    spent: 'Investiert',
    earned: 'Verdient',
    buys: 'Käufe',
    sells: 'Verkäufe',
    drawDown: 'Draw Down', not sure how to translate that
    selectACoin: 'Wählen Sie eine Coin',
    bottom: 'Unten',
    advancedStatsExplainer: 'Erweiterte Statistikerklärungen',
    advancedStatsExplainerText: 'TSL - Trailing Stoploss<br>' +
    'TPS - Take Profit Safety<br>' +
    'SL - Stop Loss<br>' +
    'AS - After Sale<br>' +
    'DD - DrawDown<br>' +
    'L - Lowest Price<br>' +
    'H - Highest Price<br>' +
    'OT - Original Trigger<br>' +
    'CT - Current Trigger<br>' +
    'HP - Highest Profit<br>' +
    'CP - Current Profit<br>' +
    'LP - Lowest Profit<br>' +
    'TB - Trailing Buy<br>' +
    'OV - Original Value<br>' +
    'TV - Trailing Value<br>' +
    'Weitere Informationen finden Sie in unserem <a target="_blank" href="https://wiki.profittrailer.com/en/webinterfaceguide">wiki</a>.',
    pnl: 'Kumulative PnL',
    growth: 'Wachstum',
    reloadData: 'Stats neu laden'
  },
  tableColumns: {
    showTradingView: 'TradingView Anzeigen',
    date: 'Datum',
    totalBuyStrategies: 'Alle kauf Strategien',
    buyStrategies: 'Kauf Strategien',
    totalSellStrategies: 'Alle verkauf Strategien',
    sellStrategies: 'Verkaufsstrategien',
    totalStrategiesHint: 'Strategies: Richtig/Insgesamt/Fehler',
    buyTrailing: 'Trailing Buys',
    sellTrailing: 'Trailing Sales',
    coin: 'Coin',
    percChange: 'Perc Change',
    percentageChange: 'Percentage Change',
    pChange: '% Change',
    askPrice: 'Ask Price',
    volume: 'Volume',
    vol: 'Vol',
    buyVTL: '(BSV / BST / BSL)',
    sellVTL: '(SSV / SST / SSL)',
    buttons: 'Buttons',
    buy: 'Buy',
    sell: 'Sell',
    bsv: 'BSV',
    bst: 'BST',
    bsl: 'BSL',
    ssv: 'SSV',
    sst: 'SST',
    ssl: 'SSL',
    profit: 'Profit',
    orderbookProfit: 'Orderbook Profit',
    bid: 'Bid',
    bidPrice: 'Bid Price',
    boughtPrice: 'Bought Price',
    boughtCost: 'Bought Cost',
    current: 'Current',
    average: 'Average',
    bought: 'Bought',
    currentValue: 'Current Value',
    boughtValue: 'Bought Value',
    amount: 'Amount',
    totalAmount: 'Total Amount',
    liqPrice: 'Liquidation Price',
    currentCost: 'Current Cost',
    firstBoughtDate: 'First Bought Date',
    lastBoughtDate: 'Last Bought Date',
    avgPrice: 'Average Price',
    currentPrice: 'Current Price',
    targetPrice: 'Target Price',
    combinedProfit: 'Combined Profit',
    targetValue: 'Target Value',
    targetProfit: 'Target Profit',
    cp: 'CP',
    totalCost: 'Total Cost',
    avg: 'Avg.',
    cur: 'Cur.',
    tar: 'Tar.',
    c: 'C',
    t: 'T',
    sProfit: 'S Profit',
    buyType: 'Buy Type',
    type: 'Type',
    addRecord: 'Add New Record',
    orderNumber: 'Order Number',
    boughtAmount: 'Bought Amount',
    soldDate: 'Sold Date',
    profitCurrency: 'Profit Currency',
    profitPercentage: 'Profit %',
    soldPrice: 'Sold Price',
    soldProfit: 'Sold Profit',
    soldAmount: 'Sold Amount',
    currentProfit: 'Current Profit',
    soldValue: 'Sold Value',
    soldCost: 'Sold Cost',
    boughtDate: 'Bought Date',
    showAllButtons: 'Show All Buttons',
    sent: 'Sent',
    validUntil: 'Valid Until',
    provider: 'Provider',
    pair: 'Pair',
    exchange: 'Exchange',
    label: 'Label',
    showCards: 'Show As Cards'
  },
  buttons: {
    buy: 'Buy',
    sell: 'Sell',
    enterPending: 'Enter Pending',
    reserve: 'Reserve',
    boughtPrice: 'Bought Price',
    dcaBuyTimes: 'Buy Times',
    cancelPending: 'Cancel Pending',
    release: 'Release',
    cancelReversal: 'Cancel Reversal',
    deleteEntry: 'Delete Entry',
    exportData: 'Export Data',
    hide: 'Hide',
    show: 'Show'
  },
  accountSettings: {
    exchange: "Exchange",
    serverSettings: 'Server Settings',
    userSettings: 'User Settings',
    notifications: 'Notifications',
    ssl: 'SSL',
    signalProviders: 'Signal Providers',
    ptAssistant: 'PT Assistant',
    saveSettings: 'Save Settings',
    noSettings: 'No settings were changed',
    applicationPort: {
      header: 'Application Port',
      placeholder: 'Port Number',
      help: 'The port used by the bot. Change this value to something unique (like 8082, etc) if you want to start other instances of the bot on the same machine.'
    },
    siteName: {
      header: 'Site Name',
      placeholder: 'My BTC Bot',
      help: 'Set the unique text you wish to appear in the browser tab (website title). This it also used in Discord and Telegram Notifications.'
    },
    apiToken: {
      header: 'Api Token',
      placeholder: 'kjashd983h2dn9832jdi3d0892h3d',
      help: 'This optional token can be used to allow third party applications to connection to your BOT via a built in API.',
      randomString: 'Generate Random String',
    },
    ptFeeder: {
      header: 'PTFeeder Location',
      placeholder: '/var/opt/pt-feeder/',
      help: 'PTFeeder root folder location.'
    },
    serverAddress: {
      header: 'Server Address',
      placeholder: '0.0.0.0',
      help: 'Bind the Profit trailer instance to a specific WAN/Public IP address. Useful for uses with multiple public IP addresses and multiple bots.'
    },
    serverContextPath: {
      header: 'Server Context Path',
      placeholder: '/binance',
      help: 'Adds a custom base url to the Web server. Using the example above you would now access ProfitTrailer from http://localhost:8081/binancebtc/monitoring.'
    },
    ExchangeUrl: {
      header: 'Exchange URL',
      placeholder: 'https://www.binance.com/tradeDetail.html?symbol=%c_%b',
      help: 'Define custom url to be used when a coin pair is clicked in the Web GUI. The %c and %b values are variables based on the coin pair being clicked.'
    },
    LogHistory: {
      header: 'Log History',
      help: 'Set how many days of sell/buy log history to show in the GUI. Once the set number of days passes, older history will be removed from the bot.'
    },
    processSpeed: {
      header: 'Process Speed',
      placeholder: 'Normal',
      help: 'Sets the process speed of the bot. Will affect CPU usage. Make sure your system can handle the change',
      slow: 'Slow',
      normal: 'Normal',
      fast: 'Fast'
    },
    runInTestMode: 'Run in Test Mode',
    runOnPracticeAccount: 'Run on Practice Account',
    runOnTestNet: 'Run On Test Net',
    marginTrading: 'Use Margin Trading',
    allowSupportAccess: 'Allow Support Access',
    openBrowser: 'Auto open browser',
    betaGUI: 'Enabled BETA GUI',
    startBalance: {
      header: 'Start Balance',
      help: 'The balance you had when first starting. Also used to calculate TCV based profit %.'
    },
    testModeBalance: {
      header: 'Test Mode Balance',
      help: 'Set or change the starting Balance for test bots. Decimals higher than or equal to 0.'
    },
    profitCalculation: {
      header: 'Profit Calculation Method',
      help: 'The method used to calculate profit displayed on the GUI.'
    },
    buyOrderType: {
      header: 'Buy Order Type',
      help: 'The order type you want ProfitTrailer to buy with.'
    },
    sellOrderType: {
      header: 'Sell Order Type',
      help: 'The order type you want ProfitTrailer to sell with.'
    },
    tradingDelay: {
      header: 'Trading Delay',
      help: 'The start delay prevents the bot from trading for the set number of minutes after bootup. This parameter is designed to give you enough time to place the bot in SOM or disable trading, or change your buy/sell strategies before it resumes trading.'
    },
    theme: {
      header: 'Theme',
      help: 'Choose between possible themes.'
    },
    currency: {
      header: 'Currency',
      help: 'Set your desired currency for values in the Web GUI to be displayed in.'
    },
    language: {
      header: 'Language',
      help: 'Set your desired localization for the Web GUI.'
    },
    timezone: {
      header: 'Timezone',
      help: 'Set the timezone of the location you live. This will take precedence over server.timezone_offset and will automatically handle daylight saving times.'
    },
    guiPrecision: {
      header: 'GUI Precision',
      help: 'Set the amount of decimals you want shown in the interface.'
    },
    advancedStats: 'Adv. Stats',
    guiNotifications: 'GUI notifications',
    autoOpenBrowser: 'Auto Open Browser',
    enableBetaGui: 'Enable BETA GUI',
    offlineConfig: 'Offline Config',
    globalSettings: 'Global Settings',
    advancedNotification: {
      header: 'Advanced Notifications',
      help: 'Set to true and save your settings to enable Advanced Notifications.'
    },
    newSignalChannel: {
      header: 'New Signal Notification Channel',
      placeholder: 'signals',
      help: 'A separate channel for new SIGNAL notifications to be sent to. If nothing is set Chat from discord instance 1 will be used instead.'
    },
    newSignalNotification: 'New Signal Notification',
    startupNotification: 'Startup Notification',
    shutdownNotification: 'Shutdown Notification',
    discordInstance: 'Discord Instance {number}',
    botToken: {
      header: 'Bot Token',
      placeholder: 'Your Bot Token',
      help: 'Your Bot Token.'
    },
    chat: {
      header: 'Chat',
      placeholder: 'channel-name',
      help: 'The channel name that the bot will post notifications in.'
    },
    testSettings: 'Test Settings',
    sellMessage: {
      header: 'Sell Message',
      help: '#Available variables: dcaCount, instanceName, strategies, quantity, rate, total, profit, dollar, boughtDate, percentage'
    },
    buyMessage: {
      header: 'Buy Message',
      help: '#Available variables: dcaCount, instanceName, quantity, rate, avgCost, total, percentage',
    },
    errorMessage: {
      header: 'Error Message',
      help: '#Add error messages that need to be ignored seperated by a comma i.e. SomeKindOfExchangeError,AnotherExchangeError. Can be BinanceWebSocketAdapterKline,APIKEY_INVALID'
    },
    sellMessages: 'Sell Messages',
    buyMessages: 'Buy Messages',
    errorMessages: 'Error Messages',
    commandMessages: 'Command Messages',
    telegramInstance: 'Telegram Instance {number}',
    chatId: {
      header: 'Chat ID',
      placeholder: 'Your Chat ID',
      help: 'Your Chat ID.'
    },
    testMessageSent: 'Test Message Sent',
    testMessageError: 'Test Message could not be sent',
    testMessageEmpty: 'Please fill out Token and Chat ID',
    sslKeyStore: {
      header: 'SSL Key Store',
      placeholder: '/etc/letsencrypt/live/yourdomain/keystore.p12',
      help: 'Add the path to your keystore file.'
    },
    sslKeyStorePassword: {
      header: 'SSL Key Store Password',
      placeholder: 'Your Password',
      help: 'Insert your Key Store Password'
    },
    sslKeyPassword: {
      header: 'SSL Key Password',
      placeholder: 'Your Password',
      help: 'Insert your Key Password'
    },
    sslKeyStoreType: {
      header: 'SSL Key Store Type',
      placeholder: 'PKCS12',
      help: 'Insert Key Store Type'
    },
    sslKeyAlias: {
      header: 'SSL Key Alias',
      placeholder: 'Your Alias',
      help: 'Insert Key Store Alias'
    },
    signalProvider: {
      header: 'Choose your Providers',
      selectProvider: 'Select the signal providers you want this bot to accept signals from.',
      selectLeave: 'Leave ALL Disabled to accept signals from ALL your providers.',
      selectFrom: 'You can select from the following list of providers',
      notYetBought: 'You have not yet bought a signal package or redeemed your voucher with the PT Assistant.',
      currentList: 'Current List of Providers',
      goToProduct: 'Go to Product'
    },
    ptAssistantTab: {
      redeemVoucher: 'Redeem Voucher',
      redeemHelp: 'Enter a valid Voucher Key.',
      redeemOptionHelp: 'Select the category for your Voucher Key.',
      licenseUpgrade: 'License Upgrade',
      apiSlot: 'Api Slot',
      config: 'Config',
      signal: 'Signal',
      currentApiKeys: 'Current Api Keys',
      key: 'Key',
      lastActiveTime: 'Last Active Time',
      licenseInformation: 'License Information',
      license: 'License',
      licenseType: 'License Type',
      exchange: 'Exchange',
      apiKeys: 'Api Keys',
      extraSlots: 'Extra Slots',
      allowedConfigs: 'Allowed Configs',
      expirationDate: 'Expiration Date',
      lifetime: 'Lifetime',
      used: 'used',
      fillOutInformation: 'Please fill out the information',
    },
    exchangeFee: {
      header: 'Custom Exchange Fee',
      help: 'Set a custom exchange fee to be used by the bot other than the bot default. Useful when using for example BNB for fees.'
    },
    enableAutoConfig: 'Auto Config Switch',
    autoConfigSwitch: 'Auto Config Switch',
    showFiatValues: "Show Fiat Values",
    autoConfigStrategyLabel: {
      header: 'Strategy Label',
      placeholder: 'Strategy Label',
      help: 'Set a unique label for your strategy'
    },
    autoConfigTrendStrategy: {
      header: 'Trend Strategy',
      placeholder: 'PTADXTREND, PT24HTREND, VWAPPERCENTAGE, MVWAPPERCENTAGE, (X)MALINE',
      help: 'Valid Values are: PTADXTREND, PT24HTREND, VWAPPERCENTAGE, MVWAPPERCENTAGE, (X)MALINE'
    },
    autoConfigTrendThreshold: {
      header: 'Trend Threshold',
      placeholder: '4',
      help: 'The switchover point for config changes'
    },
    autoConfigNormalTrendConfig: {
      header: 'Normal Trend Config',
      placeholder: 'My Config',
      help: 'The config name for the Normal trend.'
    },
    autoConfigBearTrendConfig: {
      header: 'Bear Trend Config',
      placeholder: 'My Config',
      help: 'The config name for the Bear trend.'
    },
    autoConfigSuperBearTrendConfig: {
      header: 'Super Bear Trend Config',
      placeholder: 'My Config',
      help: 'The config name for the Super Bear trend.'
    },
    autoConfigBullTrendConfig: {
      header: 'Bull Trend Config',
      placeholder: 'My Config',
      help: 'The config name for the Bull trend.'
    },
    autoConfigSuperBullTrendConfig: {
      header: 'Super Bull Trend Config',
      placeholder: 'My Config',
      help: 'The config name for the Super Bull trend.'
    },
    autoConfigNormalTrendConfigStop: {
      header: 'Normal Trend Stop Before Switch',
      help: 'Stop loss current pairs before switching to normal config.'
    },
    autoConfigBearTrendConfigStop: {
      header: 'Bear Trend Stop Before Switch',
      help: 'Stop loss current pairs before switching to bear config.'
    },
    autoConfigSuperBearTrendConfigStop: {
      header: 'Super Bear Trend Stop Before Switch',
      help: 'Stop loss current pairs before switching to super bear config.'
    },
    autoConfigBullTrendConfigStop: {
      header: 'Bull Trend Stop Before Switch',
      help: 'Stop loss current pairs before switching to bull config.'
    },
    autoConfigSuperBullTrendConfigStop: {
      header: 'Super Bull Trend Stop Before Switch',
      help: 'Stop loss current pairs before switching to super bull config.'
    },
    tradingProtection: 'Trading Protection',
    protectionBalanceError: {
      header: 'Protection Against Balance Errors',
      help: 'Set to a number higher than 0 to protect yourself against exchange balance errors. Time is set in minutes.'
    },
    protectionServiceUnavailable: {
      header: 'Protection Against Unavailable Service',
      help: 'Set to a number higher than 0 to protect yourself against exchange services unavailable. Time is set in minutes.',
    }
  },
  support: {
    headerOne: 'Support',
    question: 'Got a question or an issue?',
    lineOne: 'We offer support via our',
    lineOneLink: 'Discord Channel',
    lineTwo: 'If you have an issue or a question, please join the channel and follow the instructions given in our support-fag channels to create a ticket.',
    lineThree: 'When the ticket has been created you will be asked to provide certain information. This information can be downloaded below.',
    headerTwo: 'Have a feature request?',
    lineFour: 'We handle all feature request through our',
    lineFourLink: 'Github Issue page',
    lineFive: 'Please provide a full description of the request and a general use case for it.',
    headerThree: 'Get the files you need',
    buttonLog: 'Log File',
    buttonConfig: 'Active Config File',
    buttonBackup: 'Latest Backup',
    buttonAccounted: 'Unaccounted Folder',
    buttonSupport: 'Support Access'
  },
  changePassword: {
    adminPassword: 'Change Admin Password',
    oldPassword: 'Old Password',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    changePassword: 'Change Password',
    readOnlyPassword: 'Change Read-Only Password',
    setReadOnlyPassword: 'Set Read-Only Password'
  },
  modals: {
    saved: 'Saved',
    encounteredError: 'You encountered an error: {errorMsg}',
    cancel: 'Cancel',
    cancelled: 'Cancelled',
    save: 'Save',
    stop: 'Stop',
    saveSettings: 'Save Settings',
    exit: 'Exit',
    saveSettingsSure: 'Are you sure you want to save your settings?',
    redeemVoucher: 'Redeem Voucher',
    redeemSure: 'Make sure you have entered the voucher code correctly.',
    redeem: 'Redeem',
    voucherRedeemed: 'Voucher has been redeemed',
    copyConfig: 'Copy Config',
    configNewName: 'Enter a new name for your new config',
    configName: 'Config Name',
    insertName: 'Insert Name',
    copying: 'Copying the config. Can take a while.',
    copied: 'Config Copied',
    notAllowed: 'Not Allowed',
    removeConfig: 'Remove Config?',
    removeConfigText: 'This will immediately remove: {name}',
    remove: 'Remove',
    configRemoved: 'Config was removed',
    configSaved: 'Config Saved for {name}',
    configSaveError: 'Something went wrong for tab: {name} with the following message: {errorMsg}',
    enabledSupportAccess: 'Enabled Support Access',
    disableSupportAccess: 'Disabled Support Access',
    changeConfig: 'Change Config?',
    changeConfigText: 'This will immediately change the configuration that your bot is using to trade to {name}',
    activate: 'Yes, Activate!',
    switched: 'Switched',
    configNotExist: 'Config does not seem to exist.',
    buyAmountPercentage: 'Buy Amount Percentage',
    sellAmountPercentage: 'Sell Amount Percentage',
    selectOrderType: 'Select Order Type',
    buyPair: 'Buy {name}',
    sellPair: 'Sell {name}',
    buyPairSure: 'Sure you want to buy {name}?',
    sellPairSure: 'Sure you want to sell {name}?',
    buy: 'Buy',
    sell: 'Sell',
    submitOrder: 'Submitted order for {name}',
    notFilled: 'Not filled',
    pendingAmountPercentage: 'Pending Amount Percentage',
    sendToPending: 'Send {name} to pending',
    pendingPrice: 'Enter Target Price for {name}',
    sendToPendingButton: 'Send to pending',
    cancelPending: 'Cancel {name}',
    cancelPendingText: 'Are you sure you want to cancel the open order of {name}',
    cancelOrderNumber: 'Cancel order #{order}',
    orderCancelled: 'Order Cancelled for {name}',
    reserveAmount: 'Reserve an amount of {name}',
    reserveAmountText: 'Enter an amount you want to reserve',
    reserve: 'Reserve',
    insertValue: 'Insert Value',
    reserveAmountOfPair: 'Reserved {value} {name}',
    releaseAmount: 'Release an amount of {name}',
    releaseAmountText: 'Enter an amount you want to release',
    release: 'Release',
    releaseAmountOfPair: 'Released {value} of {name}',
    cancelReversal: 'Cancel Reversal for coin {name}',
    cancelReversalText: 'Are you sure you want to cancel the reversal for this coin?',
    cancelReversalButton: 'Cancel Reversal',
    cancelSuccess: 'Successfully cancelled',
    submit: 'Submit',
    boughtPrice: 'Enter Bought Price for {name}',
    boughtPriceText: 'You can find the formatting of the bought price command in our wiki. Check the link in the footer.',
    boughtPricePlaceholder: 'Enter Bought Price for: {name}',
    deleteEntry: 'Delete Entry',
    deleteEntryText: 'Are you sure you want to delete this entry?',
    entryDeleted: 'Entry Deleted',
    pair: 'Pair',
    addRecordPair: 'Coin needs to follow the same format, base + market. Example NANOUSDT.',
    amount: 'Amount',
    addRecordBoughtPrice: 'Bought Price',
    leverage: 'Leverage',
    addRecord: 'Add Record',
    fillOutInformation: 'Fill out all information to add a new record',
    addEntry: 'Add Entry',
    entryAdded: 'Entry Added',
    soldPrice: 'Sold Price',
    setBuyTimes: 'Set Buy Times',
    setBuyTimesText: 'Set Amount of Buy Times for {name}',
    sentBuyTimes: 'Sent {string} to {config}',
    publishConfig: 'Share Config',
    publishConfigText: 'Do you want to share {config} and make it publicly available to the ProfitTrailer Community?',
    publish: 'Publish',
    configPublished: 'Config has been published',
    renameConfig: "Rename Config",
    renameConfigText: "Please insert a new name for your config",
    renameConfigName: "Config Name",
    renaming: "Renaming config",
    renamed: "Renamed to {name}",
    resetData: 'Reset Data',
    morePair: 'Details for position {pair}',
    helperTitle: 'Config Shortcuts',
    helperText: 'Search: <strong>Ctrl-F / Cmd-F</strong><br>Find Next Instance: <strong>Ctrl-G / Cmd-G</strong><br>Find Previous Instance: <strong>Shift-Ctrl-G / Shift-Cmd-G</strong><br>Replace Text: <strong>Shift-Ctrl-F / Cmd-Option-F</strong><br>Replace All: <strong>Shift-Ctrl-R / Shift-Cmd-Option-F</strong>'
  },
  exchange: {
    deposits: "Deposits",
    chosenMarket: "Currently deposits are only available on the chosen market.",
    chosenMarketUsing: "You are using: {market}",
    totalBalance: "Total Balance:",
    inOrder: "In Order:",
    availableBalance: "Available Balance:",
    refreshing: "Refreshing",
    refreshBalance: "Refresh Balance",
    depositAddresses: "Deposit Addresses",
    depositAddress: "{market} Deposit Address",
    depositMemo: "{market} Deposit Memo",
    sendOnly: "Send only {coin} to this deposit address",
    sendWarning: "Sending coin or token other than {coin} to this address may result in the loss of your deposit",
    loading: "loading...",
    transferFunds: "Transfer Funds",
    transferFromSpot: "Transfer From Spot to Futures",
    selectACoin: "Select a coin",
    transfer: "Transfer",
    transferBalance: "Available {coin} Balance: {amount}",
    transferFromFutures: "Transfer From Futures to Spot",
    amountToTransfer: "Amount to transfer",
    transferAmountSwal: "Transfer coins to {exchange}",
    transferAmountSwalConfirm: "Are you sure you want to transfer {amount} {coin}?",
    transferInitiated: "Transfer Initiated",
    emptyFields: "You have empty fields. Please fill out all and try again"
  },
  abbreviations: {
    firstBoughtDate: 'FBD',
    lastBoughtDate: 'LBD',
    percentageChange: 'P%',
    bidPrice: 'Bid',
    askPrice: 'Ask',
    liqPrice: 'Liq',
    boughtPrice: 'Bought',
    currentValue: 'CV',
    boughtCost: 'BC',
    difference: 'Diff',
  }
}