import { useMemo, useState } from 'react'
import { Settings, TrendingUp } from 'lucide-react'

type Inputs = {
  dates: {
    currentDate: string
    lwopStartDate: string
  }
  salary: {
    annual: number
    hoursPerYear: number
  }
  deductions: Record<string, number>
  assets: Record<string, number>
  assetDates: {
    citibankUnlockDate: string
  }
  monthlyExpenses: Record<string, number>
  income: {
    parentSupport: number
  }
}

type PayPeriod = {
  id: string
  name: string
  payDate: string
  paidHours: number
  status: 'past' | 'pending' | 'current' | 'future'
}

type TimelineEvent = {
  id: number
  date: string
  event: string
  amount: number
  type: 'expense' | 'income' | 'milestone'
  status: 'future' | 'completed'
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'inputs' | 'cashflow'>('inputs')

  const [inputs, setInputs] = useState<Inputs>({
    dates: {
      currentDate: '2026-01-21',
      lwopStartDate: '2026-02-21',
    },
    salary: {
      annual: 168290,
      hoursPerYear: 2080,
    },
    deductions: {
      federalTax: 1350,
      stateTax: 280,
      fers: 284,
      socialSecurity: 401,
      medicare: 94,
      fehb: 180,
      dental: 28,
      hsa: 800,
      tspLoan: 250,
    },
    assets: {
      betterment: 9747,
      citibankChecking: 31000,
      citibankBonus: 750,
      usaaChecking: 5000,
      usaaSavings: 4500,
      oneFinance: 2000,
      chaseSavings: 500,
      chaseChecking: 400,
    },
    assetDates: {
      citibankUnlockDate: '2026-02-02',
    },
    monthlyExpenses: {
      mortgage: 2147,
      personalLoan1: 807,
      personalLoan2: 491,
      helocInterest: 400,
      insurance: 86,
      utilities: 256,
      internetPhone: 85,
      usaaVisa: 96,
      appleCard: 35,
      chaseCards: 50,
      citiSimplicity: 25,
      amexBBC: 25,
      amexPlatinum: 200,
      groceries: 300,
      gas: 150,
      medical: 200,
      discretionary: 500,
    },
    income: {
      parentSupport: 3000,
    },
  })

  const [payPeriods] = useState<PayPeriod[]>([
    { id: 'pp1', name: 'PP1-2026', payDate: '2026-01-31', paidHours: 80, status: 'current' },
    { id: 'pp2', name: 'PP2-2026', payDate: '2026-02-14', paidHours: 80, status: 'future' },
    { id: 'pp3', name: 'PP3-2026', payDate: '2026-02-28', paidHours: 80, status: 'future' },
  ])

  const [timelineEvents] = useState<TimelineEvent[]>([
    { id: 1, date: '2026-03-22', event: 'Vision Therapy #2', amount: 1685, type: 'expense', status: 'future' },
    { id: 2, date: '2026-05-31', event: 'Vision Therapy #3', amount: 970, type: 'expense', status: 'future' },
  ])

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(n)

  const fmtDec = (n: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n)

  const setNumber = (section: keyof Inputs, key: string, raw: string) => {
    const value = Number.parseFloat(raw)
    setInputs((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [key]: Number.isFinite(value) ? value : 0,
      },
    }))
  }

  const calculations = useMemo(() => {
    const hourlyRate = inputs.salary.annual / inputs.salary.hoursPerYear
    const biweeklyGross = hourlyRate * 80

    const totalDeductions = Object.values(inputs.deductions).reduce((a, b) => a + b, 0)
    const netPay80hrs = biweeklyGross - totalDeductions

    const totalMonthlyExpenses = Object.values(inputs.monthlyExpenses).reduce((a, b) => a + b, 0)
    const netMonthlyBurn = totalMonthlyExpenses - inputs.income.parentSupport

    const lockedAssets = (inputs.assets.citibankChecking ?? 0) + (inputs.assets.citibankBonus ?? 0)
    const totalLiquidNow = Object.values(inputs.assets).reduce((a, b) => a + b, 0) - lockedAssets

    const payPeriodsWithPay = payPeriods.map((pp) => ({
      ...pp,
      net: pp.paidHours > 0 ? (pp.paidHours / 80) * netPay80hrs : 0,
    }))

    return {
      hourlyRate,
      biweeklyGross,
      totalDeductions,
      netPay80hrs,
      totalMonthlyExpenses,
      netMonthlyBurn,
      lockedAssets,
      totalLiquidNow,
      payPeriodsWithPay,
    }
  }, [inputs, payPeriods])

  // ✅ FIXED: was previously `useMemo()` inside a nested `renderCashFlow()` function
  const monthlyProjection = useMemo(() => {
    const projection: Array<{
      month: string
      cashStart: number
      income: number
      expenses: number
      cashEnd: number
    }> = []

    let runningBalance = calculations.totalLiquidNow
    const currentDateObj = new Date(`${inputs.dates.currentDate}T12:00:00`)
    const unlockDateObj = new Date(`${inputs.assetDates.citibankUnlockDate}T12:00:00`)

    for (let i = 0; i < 12; i++) {
      const monthDate = new Date(currentDateObj)
      monthDate.setMonth(monthDate.getMonth() + i)
      const monthStr = monthDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

      const monthStart = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1)
      const monthEnd = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0)

      // income
      let monthIncome = inputs.income.parentSupport

      calculations.payPeriodsWithPay.forEach((pp) => {
        const payDateObj = new Date(`${pp.payDate}T12:00:00`)
        if (payDateObj >= monthStart && payDateObj <= monthEnd) monthIncome += pp.net
      })

      if (unlockDateObj >= monthStart && unlockDateObj <= monthEnd) {
        monthIncome += calculations.lockedAssets
      }

      // expenses
      let monthExpenses = calculations.totalMonthlyExpenses

      timelineEvents.forEach((ev) => {
        if (ev.type !== 'expense' || ev.status === 'completed' || !ev.date) return
        const evDateObj = new Date(`${ev.date}T12:00:00`)
        if (evDateObj >= monthStart && evDateObj <= monthEnd) monthExpenses += ev.amount
      })

      const cashStart = runningBalance
      runningBalance = runningBalance + monthIncome - monthExpenses

      projection.push({ month: monthStr, cashStart, income: monthIncome, expenses: monthExpenses, cashEnd: runningBalance })
    }

    return projection
  }, [
    calculations,
    inputs.dates.currentDate,
    inputs.assetDates.citibankUnlockDate,
    inputs.income.parentSupport,
    timelineEvents,
  ])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Disability Retirement Calculator</h1>
          <p className="text-slate-400 text-sm">Vite + React + TS • buildable • hooks fixed</p>
        </header>

        <nav className="flex gap-2 mb-6">
          <button
            className={`px-3 py-2 rounded-md text-sm ${activeTab === 'inputs' ? 'bg-sky-600' : 'bg-slate-800 text-slate-300'}`}
            onClick={() => setActiveTab('inputs')}
          >
            <span className="inline-flex items-center gap-2">
              <Settings size={16} /> Inputs
            </span>
          </button>
          <button
            className={`px-3 py-2 rounded-md text-sm ${activeTab === 'cashflow' ? 'bg-sky-600' : 'bg-slate-800 text-slate-300'}`}
            onClick={() => setActiveTab('cashflow')}
          >
            <span className="inline-flex items-center gap-2">
              <TrendingUp size={16} /> Cash Flow
            </span>
          </button>
        </nav>

        {activeTab === 'inputs' && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4">
              <h2 className="font-semibold mb-3">Salary</h2>
              <label className="block text-xs text-slate-400 mb-1">Annual salary</label>
              <input
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2"
                type="number"
                value={inputs.salary.annual}
                onChange={(e) => setNumber('salary', 'annual', e.target.value)}
              />

              <label className="block text-xs text-slate-400 mb-1 mt-3">Hours/year</label>
              <input
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2"
                type="number"
                value={inputs.salary.hoursPerYear}
                onChange={(e) => setNumber('salary', 'hoursPerYear', e.target.value)}
              />

              <div className="mt-4 text-sm text-slate-300">
                Hourly (gross): <span className="text-emerald-300 font-semibold">{fmtDec(calculations.hourlyRate)}</span>
              </div>
              <div className="text-sm text-slate-300">
                Net per 80h check: <span className="text-emerald-300 font-semibold">{fmt(calculations.netPay80hrs)}</span>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4">
              <h2 className="font-semibold mb-3">Runway</h2>
              <div className="text-sm text-slate-300">
                Liquid now: <span className="text-sky-300 font-semibold">{fmt(calculations.totalLiquidNow)}</span>
              </div>
              <div className="text-sm text-slate-300">
                Monthly burn (after support): <span className="text-amber-300 font-semibold">{fmt(calculations.netMonthlyBurn)}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cashflow' && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4 overflow-x-auto">
            <h2 className="font-semibold mb-3">12-Month Projection</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-400 border-b border-slate-800">
                  <th className="text-left py-2">Month</th>
                  <th className="text-right py-2">Start</th>
                  <th className="text-right py-2">Income</th>
                  <th className="text-right py-2">Expenses</th>
                  <th className="text-right py-2">End</th>
                </tr>
              </thead>
              <tbody>
                {monthlyProjection.map((m) => (
                  <tr key={m.month} className="border-b border-slate-900">
                    <td className="py-2 text-slate-200">{m.month}</td>
                    <td className="py-2 text-right text-slate-300">{fmt(m.cashStart)}</td>
                    <td className="py-2 text-right text-emerald-300">{fmt(m.income)}</td>
                    <td className="py-2 text-right text-rose-300">{fmt(m.expenses)}</td>
                    <td className="py-2 text-right font-semibold text-slate-100">{fmt(m.cashEnd)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
